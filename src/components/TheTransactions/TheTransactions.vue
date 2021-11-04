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
    </ul>
    <pagination
        :totalCount="transactions.length"
        :pageSize="pageSize"
        :siblingCount="1"
        :currentPage="currentPage"
        :onPageHandler="setPageHandler"
    ></pagination>
</template>

<script>
import TransactionItem from './TransactionItem.vue';
import Pagination from './../Pagination/Pagination.vue';
export default {
    components: {
        TransactionItem,
        Pagination
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
        setPageHandler(page){
            this.currentPage = page;
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