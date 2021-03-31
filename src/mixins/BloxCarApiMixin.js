const axios = require("axios");
const API_URL = "https://bloxcar.fi";

export const requestsMixin = {
    created() {

    },
    methods: {
        getVehiclesData() {
            return axios.get(`${API_URL}/vehiclelist?show=id,prices,availability`);
        }
    }
};
