import http from 'http'
import axios from 'axios';

const agent = new http.Agent({ family: 4 });
export const solverAxios = axios.create({
  baseURL: process.env.SOLVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  httpAgent: agent
});
