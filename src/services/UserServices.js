import axios from "axios";
import { baseUrl } from "src/config/Url";
import { cookies, headers, headersFormData } from "./config";
import { handleAxiosError, handleOtherStatusCodes } from "./errors";

export class UserServices {
  async MyProfile() {
    try {
      const res = await axios.get(`${baseUrl}/user`, {
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

  async UpdateProfile({ name }) {
    try {
      const res = await axios.post(`${baseUrl}/user`, {name}, {
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

  // async UpdatePassword({ password, retype_password }) {
  //   const formData = new FormData();
  //   formData.append("password", password);
  //   formData.append("retype_password", retype_password);

  //   try {
  //     const res = await axios.put(`${baseUrl}/user/change-password`, formData, {
  //       headers: headersFormData,
  //     });
  //     if (res.status === 200) {
  //       return res.data;
  //     } else {
  //       handleOtherStatusCodes(res.status);
  //       return false;
  //     }
  //   } catch (error) {
  //     handleAxiosError(error);
  //     return false;
  //   }
  // }

  // async GetProfileById({ id }) {
  //   try {
  //     const res = await axios.get(`${baseUrl}/user/profile/${id}`, {
  //       headers,
  //     });
  //     if (res.status === 200) {
  //       return res.data;
  //     } else {
  //       handleOtherStatusCodes(res.status);
  //       return false;
  //     }
  //   } catch (error) {
  //     handleAxiosError(error);
  //     return false;
  //   }
  // }
}