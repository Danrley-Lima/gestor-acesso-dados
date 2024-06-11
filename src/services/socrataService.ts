const socrataUrl = process.env.SOCRATA_URL;

import axios from "axios";

function connectToCkan() {
  return axios.create({
    baseURL: socrataUrl,
  });
}

// Exemplo qualquer
export async function querySocrata(datasetId: string, queryParams: any) {
  const socrataClient = connectToCkan();

  const response = await socrataClient.get("/api/3/action/package_list", {
    params: {
      resource_id: datasetId,
      ...queryParams,
    },
  });

  return response.data;
}
