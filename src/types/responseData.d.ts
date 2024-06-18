export default interface ResponseData {
  id: string;
  title: string;
  database: "CKAN" | "DKAN" | "SOCRATA";
  data: Record<string, unknown>;
}
