const axios = require("axios");
const API_URL = "/api/vehiclelist/v2/vehicles";

export const requestsMixin = {
    data() {
        return {
            vehicles: Array
        }
    },
    created() {
        if (localStorage.getItem('vehicles')) {
            try {
                console.log('Get data from local storage');
                this.vehicles = JSON.parse(localStorage.getItem('vehicles'));
            } catch(e) {
                console.log(e);
                alert('Error! Check console.');
            }
        }
        else {
            this.vehicles = this.getVehiclesDataFromAPI(this.handleVehicleData);
        }
    },
    methods: {
        async getVehiclesDataFromAPI(callback) {
            console.log('API call getVehiclesData');
            return await axios.get(
                `${API_URL}?range=1,50&show=id,title,vehicle_average_rating,image,position,prices,distance`
            )
            .then(function (response) {
                // handle success
                //console.log('- Success:', response.data);
                return callback(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log('- Error:', error);
            })
            .then(function () {
                // always executed
            });
        },
        getVehiclesData() {
            return this.vehicles;
        },
        getVehicleData(id) {
            return this.vehicles[id];
        },
        handleVehicleData(data) {
            const res = {};

            data.forEach (function (e) {
                res[e.id] = res[e.id] || [];
                res[e.id] = e;
            });

            const parsed = JSON.stringify(res);
            localStorage.setItem('vehicles', parsed);
            return res;
        }
    }
};
