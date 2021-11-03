<template>
    <div class="total">
        <div class="total_type green-text">
            <p>+ Incomes</p>
            <h2>{{ totalIncomes }} </h2>
        </div>
        <div class="total_type red-text">
            <p>- Expenses</p>
            <h2> {{ totalExpenses }} </h2>
        </div>
    </div>
    <ul>
    <transaction-item 
        v-for="trx in getData"
        :key="trx.id"
        :id="trx.id.toString()"
        :title="trx.title"
        :type="trx.type"
        :total="trx.total"
        :created_at="trx.created_at">
    </transaction-item>
    <button v-if="prevCondition" @click="setPrevPage">PREV</button>
    <button v-if="nextCondition" @click="setCurrentPage">NEXT</button>
    </ul>
</template>

<script>
import TransactionItem from './TransactionItem.vue';
export default {
    components: {
        TransactionItem
    },
    inject: {
        transactions: {
            type: Array
        }
    },
    data(){
        return {
            currentPage: 1,
            pageSize: 5
        }
    },
    computed: {
        getData(){
            const firstPageIndex = (this.currentPage - 1) * this.pageSize;
            const lastPageIndex = firstPageIndex + this.pageSize;
            return this.transactions.slice(firstPageIndex, lastPageIndex);
        },
        nextCondition() {
            const totalPageCount = Math.ceil( this.transactions.length / this.pageSize );
            return this.currentPage < totalPageCount
        },
        prevCondition(){
            return this.currentPage !== 1
        },
        totalIncomes(){
            let sum = 0;
            let filterTrx = this.transactions.filter(item => item.type === 'inc');
            filterTrx.forEach(item => sum += item.total);
            return sum
        },
        totalExpenses(){
            let sum = 0;
            let filterTrx = this.transactions.filter(item => item.type === 'exp');
            filterTrx.forEach(item => sum += item.total);
            return sum
        }
    },
    methods: {
        setCurrentPage(){
            this.currentPage++
        },
        setPrevPage(){
            this.currentPage--
        }
    }
}
</script>

<style scoped>
  ul {
    list-style-type: none;
  }

  /* Total */
  .total {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
    height: 7rem;
  }
  .total p {
    font-size: 1rem;
  }
  .total h2 {
    font-size: 1.6rem;
  }
  .total_type {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  /* Total */
</style>