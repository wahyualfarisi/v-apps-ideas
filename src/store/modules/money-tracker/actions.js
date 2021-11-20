import types from './types';

export default {
    [types.createTransaction]({ commit }, payload){
        commit(types.createTransaction, payload);
    }
};