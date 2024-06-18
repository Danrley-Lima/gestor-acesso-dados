import axios from "axios";
import DataType from "../types/responseData";
import ResponseData from "../types/responseData";

function connectToDataManager() {
  return axios.create({
    baseURL: process.env.DATA_MANAGER_URL,
  });
}

export async function sendResources(data: ResponseData) {
  const dataManagerClient = connectToDataManager();

  const response = await dataManagerClient.post("/resources", data);

  return response.data;
}
