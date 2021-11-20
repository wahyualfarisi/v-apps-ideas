import types from './types';

export default {
    [types.createTransaction](state, payload){
       state.transactions.unshift({
           id: new Date().getTime(),
           created_at: new Date().toLocaleDateString(),
           ...payload
       })
    }
};