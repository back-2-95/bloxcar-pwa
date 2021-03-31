const axios = require("axios");
const API_URL = "/api/vehiclelist/v2/vehicles";

export const requestsMixin = {
    created() {

    },
    methods: {
        getVehiclesData() {
            return axios.get(`${API_URL}?range=1,50&show=id,title,vehicle_average_rating,image,position,prices,distance`);
        }
    }
};
