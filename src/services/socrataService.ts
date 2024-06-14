import axios from "axios";

function connectToSocrata() {
  return axios.create({
    baseURL: process.env.SOCRATA_URL,
  });
}

// Get a resource from Socrata
export async function queryResource(datasetId: string) {
  const socrataClient = connectToSocrata();

  const response = await socrataClient.get(`resource/${datasetId}.json`);

  return response.data;
}
