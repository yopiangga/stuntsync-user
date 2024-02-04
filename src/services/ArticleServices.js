import axios from "axios";
import { baseUrl } from "src/config/Url";
import { cookies, headers, headersFormData } from "./config";
import { handleAxiosError, handleOtherStatusCodes } from "./errors";

export class ArticleServices {
    async AllArticle() {
        try {
        const res = await axios.get(`${baseUrl}/article`, {
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
    
    async DetailArticle({ id }) {
        try {
        const res = await axios.get(`${baseUrl}/article/${id}`, {
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