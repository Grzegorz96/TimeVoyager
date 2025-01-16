import { BaseResponse } from "@timevoyager/shared";
import { rtkQueryErrorSchema } from "@/schemas";

export const transformErrorResponse = (error: unknown): BaseResponse => {
    try {
        const { data } = rtkQueryErrorSchema.parse(error);
        return data;
    } catch {
        return {
            message: "An unknown error occurred",
            status: 500,
        };
    }
};
