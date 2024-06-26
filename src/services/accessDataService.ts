import axios from "axios";

function connectToDataRepository(repositoryName: string) {
  const urls: { [key: string]: string | undefined } = {
    "CKAN": process.env.CKAN_URL,
    "DKAN": process.env.DKAN_URL,
    "SOCRATA": process.env.SOCRATA_URL,
  };

  return axios.create({
    baseURL: urls[repositoryName.toUpperCase()],
  });
}

function getResourceEndpoint(repository: string) {
  const endpoints: { [key: string]: string } = {
    "CKAN": `api/3/action/resource_show?id=${process.env.CKAN_RESOURCE_ID}`,
    "DKAN": `api/1/datastore/query/${process.env.DKAN_RESOURCE_ID}/0`,
    "SOCRATA": `resource/${process.env.SOCRATA_RESOURCE_ID}.json`,
  };

  return endpoints[repository.toUpperCase()];
}

function getDataFromResponse(response: any, repository: string) {
  const data: { [key: string]: any } = {
    "CKAN": response.data.result,
    "DKAN": response.data.results,
    "SOCRATA": response.data,
  };

  return data[repository.toUpperCase()];
}

// Get a resource from a dataset
export async function queryResource(repository: string) {
  const dataClient = connectToDataRepository(repository);
  const endpoint = getResourceEndpoint(repository);
  const response = await dataClient.get(endpoint);

  return getDataFromResponse(response, repository);
}