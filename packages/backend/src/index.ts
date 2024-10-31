import dotenv from "dotenv";
import createApp from "./config/createApp";
import { type Express } from "express-serve-static-core";

dotenv.config();
const PORT = process.env.PORT || 4000;

const app: Express = createApp();

app.get("/", (req, res) => {
    res.send("Hello, world!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
