<template>
    <the-transactions></the-transactions>
</template>
<script>
import TheTransactions from '../components/TheTransactions/TheTransactions.vue';
export default {
    components: {
      TheTransactions
    },
    data(){
      return {
        title: 'Money Tracker',
        transactions: [
          { id: 1, title: 'Belanja Bulanan', created_at: '10-05-2021', type: 'exp', total: 500000 },
          { id: 2, title: 'Fee Project', created_at: '20-05-2021', type: 'inc', total: 14000000 },
          { id: 3, title: 'Sallary', created_at: '18-05-2021', type: 'inc', total: 44000000 },
          { id: 4, title: 'Bayar Wifi', created_at: '05-05-2021', type: 'exp', total: 500000 },
          { id: 5, title: 'Bayar Motor', created_at: '15-05-2021', type: 'exp', total: 1500000 },
          { id: 6, title: 'Investasi', created_at: '15-05-2021', type: 'exp', total: 5000000 },
          { id: 7, title: 'Bayar Wisuda', created_at: '15-05-2021', type: 'exp', total: 1900000 },
          { id: 8, title: 'Coffe Shop', created_at: '15-05-2021', type: 'exp', total: 2500000 },
          { id: 9, title: 'Belanja Bulanan', created_at: '10-05-2021', type: 'exp', total: 500000 },
          { id: 10, title: 'Fee Project', created_at: '20-05-2021', type: 'inc', total: 14000000 },
          { id: 11, title: 'Sallary', created_at: '18-05-2021', type: 'inc', total: 44000000 },
          { id: 12, title: 'Bayar Wifi', created_at: '05-05-2021', type: 'exp', total: 500000 },
          { id: 13, title: 'Bayar Motor', created_at: '15-05-2021', type: 'exp', total: 1500000 },
          { id: 14, title: 'Investasi', created_at: '15-05-2021', type: 'exp', total: 5000000 },
          { id: 15, title: 'Bayar Wisuda', created_at: '15-05-2021', type: 'exp', total: 1900000 },
          { id: 16, title: 'Coffe Shop', created_at: '15-05-2021', type: 'exp', total: 2500000 },
          { id: 17, title: 'Belanja Bulanan', created_at: '10-05-2021', type: 'exp', total: 500000 },
          { id: 23, title: 'Fee Project', created_at: '20-05-2021', type: 'inc', total: 14000000 },
          { id: 33, title: 'Sallary', created_at: '18-05-2021', type: 'inc', total: 44000000 },
          { id: 43, title: 'Bayar Wifi', created_at: '05-05-2021', type: 'exp', total: 500000 },
          { id: 53, title: 'Bayar Motor', created_at: '15-05-2021', type: 'exp', total: 1500000 },
          { id: 63, title: 'Investasi', created_at: '15-05-2021', type: 'exp', total: 5000000 },
          { id: 73, title: 'Bayar Wisuda', created_at: '15-05-2021', type: 'exp', total: 1900000 },
          { id: 83, title: 'Coffe Shop', created_at: '15-05-2021', type: 'exp', total: 2500000 },
          { id: 93, title: 'Belanja Bulanan', created_at: '10-05-2021', type: 'exp', total: 500000 },
          { id: 103, title: 'Fee Project', created_at: '20-05-2021', type: 'inc', total: 14000000 },
          { id: 113, title: 'Sallary', created_at: '18-05-2021', type: 'inc', total: 44000000 },
          { id: 123, title: 'Bayar Wifi', created_at: '05-05-2021', type: 'exp', total: 500000 },
          { id: 133, title: 'Bayar Motor', created_at: '15-05-2021', type: 'exp', total: 1500000 },
          { id: 143, title: 'Investasi', created_at: '15-05-2021', type: 'exp', total: 5000000 },
          { id: 153, title: 'Bayar Wisuda', created_at: '15-05-2021', type: 'exp', total: 1900000 },
          { id: 163, title: 'Coffe Shop', created_at: '15-05-2021', type: 'exp', total: 2500000 },
        ]
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
