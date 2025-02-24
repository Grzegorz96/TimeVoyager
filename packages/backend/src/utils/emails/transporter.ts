import nodemailer from "nodemailer";
import { env } from "@/config";

export const getTransporter = () =>
    nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: env.EMAIL_SENDER_USER,
            pass: env.EMAIL_SENDER_PASSWORD,
        },
    });
