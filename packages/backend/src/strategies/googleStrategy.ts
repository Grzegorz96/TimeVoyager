import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { GoogleUser } from "@/models";
import { env } from "@/utils/constants";
import { handleError } from "@/utils";
import { z } from "zod";

const googleProfileSchema = z.object({
    id: z.string().min(21).max(21),
    displayName: z.string().min(2).max(51),
    emails: z.array(z.object({ value: z.string().email() })).min(1),
});

passport.use(
    new GoogleStrategy(
        {
            clientID: env.GOOGLE_CLIENT_ID,
            clientSecret: env.GOOGLE_CLIENT_SECRET,
            callbackURL: env.GOOGLE_REDIRECT_URI,
            scope: ["profile", "email"],
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                const foundUser = await GoogleUser.findOne({
                    googleId: profile.id,
                });

                if (!foundUser) {
                    const validatedProfile = googleProfileSchema.parse(profile);

                    const newUser = await GoogleUser.create({
                        googleId: validatedProfile.id,
                        email: validatedProfile.emails[0].value,
                        username: validatedProfile.displayName,
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
