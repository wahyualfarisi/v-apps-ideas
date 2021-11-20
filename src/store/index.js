import { createStore } from 'vuex';
import moneyTrackerModule from './modules/money-tracker'

const store = createStore({
    modules: {
        moneyTracker: moneyTrackerModule
    }
})

export default store;