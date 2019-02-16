import axios from "axios";

export default class Rest {
  async get(url, params) {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return new Error(error);
    }
  }
}
