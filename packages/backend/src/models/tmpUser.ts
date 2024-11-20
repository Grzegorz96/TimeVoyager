import { Schema, model, InferSchemaType } from "mongoose";
import { LocalUser } from "./user";

const TmpUserSchema = new Schema({
    activationToken: {
        type: String,
        required: true,
        unique: true,
        match: [
            /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
            "Invalid token format",
        ],
    },
    expireAt: {
        type: Date,
        required: true,
        default: new Date(Date.now() + 30 * 60 * 1000), // 30 minutes
        expires: 0,
    },
});
TmpUserSchema.add(LocalUser.schema.pick(["username", "email", "password"]));
TmpUserSchema.index({ username: 1 }, { unique: true });
type TmpUserType = InferSchemaType<typeof TmpUserSchema>;

export const TmpUser = model<TmpUserType>("TmpUser", TmpUserSchema);
