//备用:http://123.207.32.32:8000/api/hy
//baseURL: http://106.54.54.237:8000/api/hy/
// recommend
// detail?iid=1m7s9c4
// home/data?page=1&type=sell
import axios from 'axios'

export function request(urlOptions) {
    const instance = axios.create({
        baseURL: "http://123.207.32.32:8000/api/hy",
        // baseURL: "http://106.54.54.237:8000/api/hy/",
        timeout: 10000
    });
    return instance(urlOptions);
}