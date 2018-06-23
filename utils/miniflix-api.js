import axios from 'axios';
import { getAccessToken } from './auth';

const BASE_URL = process.env.VUE_APP_WEB_TASK_URL;

export { };

// axios.get(url).then(response => response.data);
// axios.get(url, { headers: { Authorization: `Bearer ${getAccessToken()}` } }).then(response => response.data);