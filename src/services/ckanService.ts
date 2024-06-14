import axios from "axios";

function connectToCkan() {
  return axios.create({
    baseURL: process.env.CKAN_URL,
  });
}

// Get information about a dataset
export async function detailDataset(datasetId: string) {
  const ckanClient = connectToCkan();
  const response = await ckanClient.get(`/api/3/action/package_show?id=${datasetId}`);

  console.log()

  return response.data.result;
}

// Get a resource from a dataset
export async function queryResource(resourceId: string) {
  const ckanClient = connectToCkan();
  const response = await ckanClient.get(`/api/3/action/resource_show?id=${resourceId}`);

  return response.data.result;
}
