

import { axiosUtilService } from "../utils/axiosUtilService";

export const getCatDetails = () => {
    return axiosUtilService().get('https://api.thecatapi.com/v1/images/search?limit=30');
}