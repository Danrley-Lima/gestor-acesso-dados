import axios from "axios";

function connectToDkan() {
  return axios.create({
    baseURL: process.env.DKAN_URL,
  });
}

// Get information about a dataset
export async function detailDataset(datasetId: string) {
  const dkanClient = connectToDkan();
  const response = await dkanClient.get(`api/1/metastore/schemas/dataset/items/${datasetId}`);

  return response.data;
}

// Get a resource from a dataset
export async function queryResource(datasetId: string) {
  const dkanClient = connectToDkan();
  const response = await dkanClient.get(`api/1/datastore/query/${datasetId}/0`); // Distribution ID is generally 0

  return response.data;
}
