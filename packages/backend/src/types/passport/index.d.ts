import "passport";
import { type Types } from "mongoose";

declare global {
    namespace Express {
        interface User {
            _id: Types.ObjectId;
            id?: string;
            username: string;
            email: string;
        }
    }
}
