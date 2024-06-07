import axios from "axios";

export async function fetchData() {
  const apiUrl = process.env.CKAN_API_URL;

  const response = await axios.get(`${apiUrl}action/package_list`);

  return response.data;
}
