import axios from "axios";
import { baseUrl } from "src/config/Url";
import { cookies, headers, headersFormData } from "./config";
import { handleAxiosError, handleOtherStatusCodes } from "./errors";

export class RecomendationCheckServices {
    async CreateRecomendationCheck({ recomendationId }) {
        try {
        const res = await axios.post(
            `${baseUrl}/recomendation-check`,
            { recomendationId },
            {
            headers,
            }
        );
        if (res.status === 200) {
            return res.data;
        } else {
            handleOtherStatusCodes(res.status);
            return false;
        }
        } catch (error) {
        handleAxiosError(error);
        return false;
        }
    }

}