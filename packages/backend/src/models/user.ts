import { Schema, model, InferSchemaType } from "mongoose";

const BaseUserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            min: [3, "Username must be at least 3 characters long"],
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: {
                validator: function (value: string) {
                    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
                },
                message: "Invalid email address format",
            },
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
        min: [8, "Password must be at least 8 characters long"],
    },
});

LocalUserSchema.index({ username: 1 }, { unique: true });

const DiscordUserSchema = new Schema({
    discordId: {
        type: String,
        required: true,
        unique: true,
        sparse: true,
        min: [17, "Discord id must be at least 17 characters long"],
        max: [18, "Discord id must be at most 18 characters long"],
    },
});

const GoogleUserSchema = new Schema({
    googleId: {
        type: String,
        required: true,
        unique: true,
        sparse: true,
        min: [21, "Google id must be at least 21 characters long"],
        max: [21, "Google id must be at most 21 characters long"],
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
