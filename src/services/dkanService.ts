const dkanUrl = process.env.DKAN_URL;

import axios from "axios";

function connectToCkan() {
  return axios.create({
    baseURL: dkanUrl,
  });
}

// Exemplo qualquer
export async function queryDkan(datasetId: string, queryParams: any) {
  const dkanClient = connectToCkan();

  const response = await dkanClient.get("/api/3/action/package_list", {
    params: {
      resource_id: datasetId,
      ...queryParams,
    },
  });

  return response.data;
}
