import { ref} from "vue";
import { useStore } from 'vuex'

const API_URL = '/api/vehiclelist/v2/vehicles';

export default function useBloxCarApi() {
    const store = useStore();
    let vehicle = ref({});
    let vehicles = ref([]);

    async function getVehicles() {
        if (hasData()) {
            console.log('store.state.vehicles has data');
            vehicles.value = store.state.vehicles;
        }
        else {
            const response = await fetch(`${API_URL}?range=1,50&show=id,title,vehicle_average_rating,image,position,prices,distance`);
            const data = await response.json();
            const res = {};
            data.forEach (function (e) {
                res[e.id] = res[e.id] || [];
                res[e.id] = e;
            });
            store.state.vehicles = vehicles.value = res;
        }
    }

    function hasData() {
        return Object.keys(store.state.vehicles).length;
    }

    function getVehicle(id) {
        console.log('Get vehicle with id '+ id);

        if (!hasData()) {
            console.log('There was no data in store.state.vehicles, so fetching it...');
            getVehicles().then(() => {vehicle.value = store.state.vehicles[id]});
        } else {
            vehicle.value = store.state.vehicles[id];
        }
    }

    return {
        getVehicles,
        getVehicle,
        vehicle,
        vehicles
    };
}
