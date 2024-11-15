import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { LocalUser } from "@/models";
import { comparePasswords } from "@/utils";

passport.use(
    new LocalStrategy(
        { usernameField: "emailOrUsername" },
        async (emailOrUsername, password, done) => {
            try {
                const foundUser = await LocalUser.findOne({
                    $or: [
                        { email: emailOrUsername },
                        { username: emailOrUsername },
                    ],
                });

                if (!foundUser) {
                    return done(null, false, {
                        message: "Wrong email or username",
                    });
                }

                if (!(await comparePasswords(password, foundUser.password))) {
                    return done(null, false, { message: "Wrong password" });
                }

                return done(null, foundUser);
            } catch (err) {
                return done(err);
            }
        }
    )
);
