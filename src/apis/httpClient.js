import axios from "axios";

const httpClient = axios.create();

httpClient.defaults.timeout = 10000;
httpClient.defaults.headers.common["Content-Type"] = "application/json"

export { httpClient };
