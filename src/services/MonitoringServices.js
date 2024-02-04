import axios from "axios";
import { baseUrl } from "src/config/Url";
import { cookies, headers, headersFormData } from "./config";
import { handleAxiosError, handleOtherStatusCodes } from "./errors";

export class MonitoringServices {
    async CreateMonitoring({ babyId, height, month }) {
        try {
        const res = await axios.post(
            `${baseUrl}/monitoring`,
            { babyId, height, month },
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

    async MonitoringByBabyId({ babyId }) {
        try {
        const res = await axios.get(`${baseUrl}/monitoring/baby/${babyId}`, {
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