import types from './types';

export default {
    [types.createTransaction](context, payload){
        context.commit(types.createTransaction, payload);
    }
};