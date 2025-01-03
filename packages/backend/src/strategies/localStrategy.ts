import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { LocalUser } from "@/models";
import { comparePasswords } from "@/utils";

passport.use(
    new LocalStrategy(
        { usernameField: "email" },
        async (email, password, done) => {
            try {
                const foundUser = await LocalUser.findOne({ email });

                if (!foundUser) {
                    return done(null, false, {
                        message: "Wrong credentials",
                    });
                }

                if (foundUser.status !== "active") {
                    return done(null, false, {
                        message: "Account is not active",
                    });
                }

                if (!(await comparePasswords(password, foundUser.password))) {
                    return done(null, false, { message: "Wrong credentials" });
                }

                return done(null, foundUser);
            } catch (err) {
                return done(err);
            }
        }
    )
);
