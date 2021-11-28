<template>
    <form-transaction 
        @save-data="onSaveTransaction"
        data-testid="form-transaction"
    />
</template>
<script>
import FormTransaction from './FormTransaction';
import types from './../../../../../store/modules/money-tracker/types';
export default {
    name: 'AddTransaction',

    components: {
        FormTransaction
    },
    methods: {
        onSaveTransaction(data){
            this.$store.dispatch(`moneyTracker/${types.createTransaction}`, data)
        }
    }
}
</script>