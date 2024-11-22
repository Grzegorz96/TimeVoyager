import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { GoogleUser } from "@/models";
import { env } from "@/utils/constants";
import { handleError } from "@/utils";
import { z } from "zod";
import { localUserSchema } from "@timevoyager/shared";

const googleProfileSchema = z.object({
    id: z.string().min(21).max(21),
    displayName: localUserSchema.shape.username,
    emails: z.array(z.object({ value: localUserSchema.shape.email })).min(1),
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