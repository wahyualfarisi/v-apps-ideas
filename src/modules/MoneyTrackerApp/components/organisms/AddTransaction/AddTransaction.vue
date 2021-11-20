<template>
    <form-transaction 
        @save-data="onSaveTransaction"
    />
</template>
<script>
import FormTransaction from './FormTransaction';
export default {
    components: {
        FormTransaction
    },
    methods: {
        onSaveTransaction(data){
            console.log('form on save transaction: ', data);
        }
    }
}
</script>