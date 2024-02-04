import axios from "axios";
import { baseUrl } from "src/config/Url";
import { cookies, headers, headersFormData } from "./config";
import { handleAxiosError, handleOtherStatusCodes } from "./errors";

export class VideoServices {
    async AllVideo() {
        try {
        const res = await axios.get(`${baseUrl}/video`, {
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
    
    async DetailVideo({ id }) {
        try {
        const res = await axios.get(`${baseUrl}/video/${id}`, {
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