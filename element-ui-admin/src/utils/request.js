import axios from 'axios'

const service = axios.create({
    baseURL: 'http://api-dev',
    timeout: 5000
})
export default service