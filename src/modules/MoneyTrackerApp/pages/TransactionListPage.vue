<template>
    <the-transactions></the-transactions>
</template>
<script>
import TheTransactions from '../components/TheTransactions/TheTransactions.vue';
import MockData from './../mock-data/transactions';
export default {
    components: {
      TheTransactions
    },
    data(){
      return {
        title: 'Money Tracker',
        transactions: MockData || []
      }
    },
    provide(){
      return {
        transactions: this.transactions
      }
    }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400;500;600;700;900&display=swap');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    line-height: 1.6;
    font-size: 62.5%;
    background-color: #fff;
  }



  .green-text {
    color: var(--color-green);
  }

  .red-text {
    color: var(--color-red);
  }
</style>
