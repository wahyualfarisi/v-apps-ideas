import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

import mockdata from './../../../helpers/mock-data/transactions';

export default {
    namespaced: true,
    state(){
        return {
            transactions: mockdata || []
        }
    },
    getters,
    mutations,
    actions
}