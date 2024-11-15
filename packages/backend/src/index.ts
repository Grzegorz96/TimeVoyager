import createApp from "./setup/createApp";
import { type Express } from "express-serve-static-core";
import { env } from "./utils/constants";
import connectToDBs from "./databases";

connectToDBs((err?: unknown) => {
    if (!err) {
        app.listen(env.PORT, () => {
            console.log(`Server is running on port ${env.PORT}`);
        });
    }
});

const app: Express = createApp();
