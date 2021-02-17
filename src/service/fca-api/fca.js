import axios from 'axios';
import { URL_API } from '../../constance/constance';

export default axios.create({
    baseURL: URL_API
})