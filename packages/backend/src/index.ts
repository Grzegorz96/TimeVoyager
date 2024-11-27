import createApp from "./setup/createApp";
import { type Express } from "express-serve-static-core";
import { env } from "./utils/constants";
import connectToDBs, { disconnectFromDBs } from "./databases";
import { runReminderWorker } from "./jobs/workers/runWorkers";

connectToDBs(async (err?: unknown) => {
    if (!err) {
        try {
            await runReminderWorker();
            app.listen(env.PORT, () => {
                console.log(`Server is running on port ${env.PORT}`);
            });
        } catch (err: unknown) {
            await disconnectFromDBs();
            console.error(err);
        }
    }
});

const app: Express = createApp();
