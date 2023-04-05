import axios from "axios";

const httpClient = axios.create();
httpClient.defaults.timeout = 10000;

export { httpClient };
