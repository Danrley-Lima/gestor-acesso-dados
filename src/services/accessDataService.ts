import axios from "axios";
import { ConverterCSVtoJSON } from "../utils/converterCSVtoJSON";

function connectToDataRepository(repositoryName: string) {
  const urls: { [key: string]: string | undefined } = {
    "CKAN": process.env.CKAN_URL,
    "DKAN": process.env.DKAN_URL,
    "SOCRATA": process.env.SOCRATA_URL,
  };

  return axios.create({
    baseURL: urls[repositoryName],
  });
}

function getResourceEndpoint(repository: string) {
  const endpoints: { [key: string]: string } = {
    "CKAN": `api/3/action/resource_show?id=${process.env.CKAN_RESOURCE_ID}`,
    "DKAN": `api/1/datastore/query/${process.env.DKAN_RESOURCE_ID}/0`,
    "SOCRATA": `resource/${process.env.SOCRATA_RESOURCE_ID}.json`,
  };

  return endpoints[repository];
}

function getDataFromResponse(response: any, repository: string) {
  const data: { [key: string]: any } = {
    "CKAN": response.data.result,
    "DKAN": response.data.results,
    "SOCRATA": response.data,
  };

  return data[repository];
}

function putDataToResponse(response: any, jsonData: any, repository: string) {
  if (repository === "CKAN") {
    response.data.result = jsonData;
  } else if (repository === "DKAN") {
    response.data.results = jsonData;
  } else {
    response.data = jsonData;
  }
  return response;
}


// Get a resource from a dataset
export async function queryResource(repository: string) {
  const dataClient = connectToDataRepository(repository);
  const endpoint = getResourceEndpoint(repository);
  const response = await dataClient.get(endpoint);

  {/*
   -> para testar a conversão de csv para json
  let csvData: any = "name,age\nJohn,25\nJane,23\n";
  response.headers["content-type"] = 'text/csv';
  response.data.result = csvData;
  */}

  if (response.headers["content-type"] == 'text/csv') {
    const converterCSVtoJSON = new ConverterCSVtoJSON();
    const csvData = getDataFromResponse(response, repository);
    const jsonData = await converterCSVtoJSON.execute({ csvData });

    let responseFormatted = putDataToResponse(response, jsonData, repository);
    responseFormatted.headers["content-type"] = 'application/json';

    return getDataFromResponse(responseFormatted, repository);
  }

  return getDataFromResponse(response, repository);
}