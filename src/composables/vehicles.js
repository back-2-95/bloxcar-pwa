import { ref} from "vue";
import { useStore } from 'vuex'

const API_URL = '/api/vehiclelist/v2/vehicles';

export default function useBloxCarApi() {
    const store = useStore();
    let vehicle = ref({});
    let vehicles = ref([]);

    function getVehicles() {
        if (hasData()) {
            console.log('store.state.vehicles has data');
            vehicles.value = store.state.vehicles;
        }
        else {
            fetch(`${API_URL}?range=1,50&show=id,title,vehicle_average_rating,image,position,prices,distance`)
                .then(response => response.json())
                .then(data => {
                    const res = {};

                    data.forEach (function (e) {
                        res[e.id] = res[e.id] || [];
                        res[e.id] = e;
                    });

                    store.state.vehicles = vehicles.value = res;
                });
        }
    }

    function hasData() {
        return Object.keys(store.state.vehicles).length;
    }

    function getVehicle(id) {
        console.log('Get vehicle with id '+ id);

        if (!hasData()) {
            console.log('There was no data in store.state.vehicles, so fetching it...');
            getVehicles();
        }
        console.log(store.state.vehicles);
        vehicle.value = vehicles;
    }

    return {
        getVehicles,
        getVehicle,
        vehicle,
        vehicles
    };
}
