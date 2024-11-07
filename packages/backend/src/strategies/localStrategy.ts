import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { User } from "@/models";
import { comparePasswords } from "@/utils";

passport.serializeUser((user: Express.User, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
    try {
        const foundUser = await User.findById(id);

        if (!foundUser) {
            return new Error("User not found");
        }

        done(null, foundUser);
    } catch (error) {
        done(error, null);
    }
});

passport.use(
    new LocalStrategy(
        { usernameField: "emailOrUsername" },
        async (emailOrUsername, password, done) => {
            console.log("jestem w local strategy");
            try {
                const foundUser = await User.findOne({
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
                console.log(foundUser);
                return done(null, foundUser);
            } catch (error) {
                return done(error);
            }
        }
    )
);
