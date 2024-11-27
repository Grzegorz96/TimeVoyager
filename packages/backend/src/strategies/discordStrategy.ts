import passport from "passport";
import { Strategy as DiscordStrategy } from "passport-discord";
import { env } from "@/utils/constants";
import { DiscordUser } from "@/models";
import { handleError } from "@/utils";
import { z } from "zod";
import { localUserSchema } from "@timevoyager/shared";

const discordProfileSchema = localUserSchema
    .pick({
        username: true,
        email: true,
    })
    .extend({
        id: z.string().min(17).max(18),
    });

passport.use(
    new DiscordStrategy(
        {
            clientID: env.DISCORD_CLIENT_ID,
            clientSecret: env.DISCORD_CLIENT_SECRET,
            callbackURL: env.DISCORD_REDIRECT_URL,
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
                        status: "active",
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
