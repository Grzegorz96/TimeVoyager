import { Schema, model, InferSchemaType } from "mongoose";
import { MAX } from "uuid";
import { string } from "zod";

const BaseUserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            minLength: [2, "Username must be at least 2 characters long"],
            maxLength: [51, "Username must be at most 51 characters long"],
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                "Invalid email address format",
            ],
        },
    },
    {
        timestamps: true,
        discriminatorKey: "_type",
    }
);

const LocalUserSchema = new Schema({
    password: {
        type: String,
        required: true,
        minLength: [8, "Password must be at least 8 characters long"],
    },
});

LocalUserSchema.index({ username: 1 }, { unique: true });

const DiscordUserSchema = new Schema({
    discordId: {
        type: String,
        required: true,
        unique: true,
        sparse: true,
        minlength: [17, "Discord id must be at least 17 characters long"],
        maxlength: [18, "Discord id must be at most 18 characters long"],
    },
});

const GoogleUserSchema = new Schema({
    googleId: {
        type: String,
        required: true,
        unique: true,
        sparse: true,
        minLength: [21, "Google id must be at least 21 characters long"],
        maxLength: [21, "Google id must be at most 21 characters long"],
    },
});

type BaseUserType = InferSchemaType<typeof BaseUserSchema>;

type LocalUserType = InferSchemaType<typeof LocalUserSchema> &
    BaseUserType & {
        _type: "local";
    };

type DiscordUserType = InferSchemaType<typeof DiscordUserSchema> &
    BaseUserType & {
        _type: "discord";
    };

type GoogleUserType = InferSchemaType<typeof GoogleUserSchema> &
    BaseUserType & {
        _type: "google";
    };

export const BaseUser = model<BaseUserType>("User", BaseUserSchema);
export const LocalUser = BaseUser.discriminator<LocalUserType>(
    "local",
    LocalUserSchema
);
export const DiscordUser = BaseUser.discriminator<DiscordUserType>(
    "discord",
    DiscordUserSchema
);
export const GoogleUser = BaseUser.discriminator<GoogleUserType>(
    "google",
    GoogleUserSchema
);
