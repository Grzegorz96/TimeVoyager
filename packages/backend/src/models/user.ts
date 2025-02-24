import { Schema, model, type InferSchemaType } from "mongoose";
import { activationTokenRegEx } from "@/utils/constants";
import { UserStatus, UserType, newLocalUserSchema } from "@timevoyager/shared";

import { z } from "zod";

export type NewLocalUserDTO = z.infer<typeof newLocalUserSchema>;

const BaseUserSchema = new Schema(
    {
        username: {
            type: String,
            trim: true,
            required: true,
            minLength: [2, "Username must be at least 2 characters long"],
            maxLength: [51, "Username must be at most 51 characters long"],
        },
        email: {
            type: String,
            trim: true,
            required: true,
            validate: {
                validator: (email: string) =>
                    newLocalUserSchema.shape.email.safeParse(email).success,
                message: "Invalid email address format",
            },
        },
        status: {
            type: String,
            required: true,
            enum: UserStatus,
        },
    },
    {
        timestamps: true,
        discriminatorKey: "_type",
    }
);

BaseUserSchema.index({ email: 1, _type: 1 }, { unique: true });

const LocalUserSchema = new Schema({
    password: {
        type: String,
        required: true,
        minLength: [8, "Password must be at least 8 characters long"],
    },
    activationToken: {
        type: String,
        unique: true,
        sparse: true,
        required: function (this: { status: string }) {
            return this.status === UserStatus.PENDING;
        },
        match: [activationTokenRegEx, "Invalid token format"],
    },
    expireAt: {
        type: Date,
        required: function (this: { status: string }) {
            return this.status === UserStatus.PENDING;
        },
        expires: 0,
    },
});

const DiscordUserSchema = new Schema({
    discordId: {
        type: String,
        required: true,
        unique: true,
        minlength: [17, "Discord id must be at least 17 characters long"],
        maxlength: [18, "Discord id must be at most 18 characters long"],
    },
});

const GoogleUserSchema = new Schema({
    googleId: {
        type: String,
        required: true,
        unique: true,
        minLength: [21, "Google id must be at least 21 characters long"],
        maxLength: [21, "Google id must be at most 21 characters long"],
    },
});

type BaseUserType = InferSchemaType<typeof BaseUserSchema>;

type LocalUserType = InferSchemaType<typeof LocalUserSchema> &
    BaseUserType & {
        _type: UserType.LOCAL;
    };

type DiscordUserType = InferSchemaType<typeof DiscordUserSchema> &
    BaseUserType & {
        _type: UserType.DISCORD;
    };

type GoogleUserType = InferSchemaType<typeof GoogleUserSchema> &
    BaseUserType & {
        _type: UserType.GOOGLE;
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
