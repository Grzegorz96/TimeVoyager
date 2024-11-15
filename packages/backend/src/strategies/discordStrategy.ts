import passport from "passport";
import { Strategy as DiscordStrategy } from "passport-discord";
import { env } from "@/utils/constants";
import { DiscordUser } from "@/models";
import { handleMongoError } from "@/utils";

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
                    const newUser = await DiscordUser.create({
                        discordId: profile.id,
                        email: profile.email,
                        username: profile.username,
                    });

                    return done(null, newUser);
                }

                return done(null, foundUser);
            } catch (err: unknown) {
                handleMongoError(err, done);
            }
        }
    )
);
