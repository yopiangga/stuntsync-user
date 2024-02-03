import { baseUrl } from "src/config/Url";
import { handleAxiosError, handleOtherStatusCodes } from "./errors";
import axios from "axios";
import { headers } from "./config";

export class AuthServices {
  async SignUp({ name, email, password }) {
    try {
      const res = await axios.post(`${baseUrl}/auth/signup`, {
        name: name,
        email: email,
        password: password,
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

  async SignIn({ email, password }) {
    try {
      const res = await axios.post(`${baseUrl}/auth/signin`, {
        email: email,
        password: password,
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

  // async SignOut() {
  //   try {
  //     const res = await axios.post(`${baseUrl}/auth/logout`, { headers });
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
