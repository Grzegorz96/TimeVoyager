import createApp from "./config/createApp";
import { type Express } from "express-serve-static-core";
import { env } from "./utils/constants";
import connectToDBs from "./databases";

connectToDBs((error?: unknown) => {
    if (!error) {
        app.listen(env.PORT, () => {
            console.log(`Server is running on port ${env.PORT}`);
        });
    }
});

const app: Express = createApp();
