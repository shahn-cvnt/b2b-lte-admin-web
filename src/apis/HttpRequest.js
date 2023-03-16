import axios from "axios";

const cvnet = axios.create();
cvnet.defaults.timeout = 10000;

export { cvnet };
