import passport from "passport";
import { BaseUser } from "@/models";
import "./localStrategy";
import "./discordStrategy";
import "./googleStrategy";

passport.serializeUser((user: Express.User, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
    try {
        const foundUser = await BaseUser.findById(id);

        if (!foundUser) {
            return done(null, false);
        }

        done(null, foundUser);
    } catch (err: unknown) {
        done(err, null);
    }
});
