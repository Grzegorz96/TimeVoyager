import passport from "passport";
import { Strategy as DiscordStrategy } from "passport-discord";
import { env } from "@/utils/constants";
import { DiscordUser } from "@/models";
import { handleError } from "@/utils";
import { z } from "zod";

const discordProfileSchema = z.object({
    id: z.string(),
    username: z.string(),
    email: z.string().email(),
});

passport.use(
    new DiscordStrategy(
        {
            clientID: env.DISCORD_CLIENT_ID,
            clientSecret: env.DISCORD_CLIENT_SECRET,
            callbackURL: env.DISCORD_REDIRECT_URI,
            scope: ["identify", "email"],
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                const foundUser = await DiscordUser.findOne({
                    discordId: profile.id,
                });

                if (!foundUser) {
                    const validatedProfile =
                        discordProfileSchema.parse(profile);

                    const newUser = await DiscordUser.create({
                        discordId: validatedProfile.id,
                        email: validatedProfile.email,
                        username: validatedProfile.username,
                    });

                    return done(null, newUser);
                }

                return done(null, foundUser);
            } catch (err: unknown) {
                return handleError(err, done);
            }
        }
    )
);
