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
                //localStorage.removeItem('vehicles');
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
            //console.log('Call getVehicleData with id ', id);

            return this.vehicles[id];
        },
        handleVehicleData(data) {
            console.log('Handle vehicle data');

            const res = {}; // Create an empty object that will hold the answer

            data.forEach (function (e) { // Use this function to iterate over each item in the list
                res[e.id] = res[e.id] || [];   // inspired by the Nina Scholz answer below
                res[e.id] = e;   // Append the result to the array
            });

            //console.log('res', res);

            const parsed = JSON.stringify(res);
            localStorage.setItem('vehicles', parsed);
            return res;
        }
    }
};
