import axios from "axios";

const ckanUrl = process.env.CKAN_URL;

function connectToCkan() {
  return axios.create({
    baseURL: ckanUrl,
  });
}

// Exemplo qualquer
export async function queryCkan(datasetId: string, queryParams: any) {
  const ckanClient = connectToCkan();

  const response = await ckanClient.get("/api/3/action/package_list", {
    params: {
      resource_id: datasetId,
      ...queryParams,
    },
  });

  return response.data;
}
