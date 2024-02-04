import axios from "axios";
import { baseUrl } from "src/config/Url";
import { cookies, headers, headersFormData } from "./config";
import { handleAxiosError, handleOtherStatusCodes } from "./errors";

export class RecomendationServices {
    async CreateRecomendation({ babyId, title, desc, type, month, qty }) {
        try {
        const res = await axios.post(
            `${baseUrl}/recomendation`,
            { babyId, title, desc, type, month, qty },
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

    async RecomendationByBabyId({ babyId }) {
        try {
        const res = await axios.get(`${baseUrl}/recomendation/baby/${babyId}`, {
            headers,
        });
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