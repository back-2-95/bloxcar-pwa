import {computed, ref} from "vue";
import { useStore } from 'vuex'

const API_URL = '/api/vehiclelist/v2/vehicles';

function getOneVehicle(data, id) {
    data.forEach (function (e) {
        if (e.id === parseInt(id)) {
            console.log('Found vehicle data with id '+ id, e);
            return e;
        }
    });
}

export default function useBloxCarApi() {
    const store = useStore();
    let vehicle = ref({});
    let vehicles = ref([]);

    function getVehicles() {
        if (Object.keys(store.state.vehicles).length) {
            console.log('store.state.vehicles has data');
            vehicles.value = store.state.vehicles;
        }
        else {
            fetch(`${API_URL}?range=1,50&show=id,title,vehicle_average_rating,image,position,prices,distance`)
                .then(response => response.json())
                .then(data => {
                    store.state.vehicles = vehicles.value = data;
                });
        }
    }

    function getVehicle(id) {
        console.log('Get vehicle with id '+ id);
        vehicle.value = getOneVehicle(store.state.vehicles, id);
    }

    return {
        vehiclesData: computed(() => store.state.vehicles),
        getVehicles,
        getVehicle,
        vehicle,
        vehicles
    };
}
