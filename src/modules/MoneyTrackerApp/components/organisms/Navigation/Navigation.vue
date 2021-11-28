<template>
   <nav>
      <base-card>
        <ul>
            <li><router-link :to="listTransactionLink">List</router-link> </li>
            <li><router-link :to="newTransactionLink">New Transaction</router-link> </li>
        </ul>
      </base-card>
    </nav>
</template>

<script>
import BaseCard from './../../atoms/BaseCard';
export default {
    components: {
        BaseCard
    },

    computed: {
        newTransactionLink(){
            return 'add-transaction'
        },
        listTransactionLink(){
            return 'list-transaction'
        }
    }
}
</script>

<style scoped>
    ul {
        list-style-type: none;
        display: flex;
    }

    a {
        font-size: 1rem;
        text-decoration: none;
        color: #111;
        font-weight: 500;
    }
    a.router-link-active {
        border-bottom: 1px solid #193498;
    }
    li:not(:last-child){
        margin-right: 1rem;
    }
</style>