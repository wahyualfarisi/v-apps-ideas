<template>
   <nav>
      <ul>
        <li><router-link :to="listTransactionLink">List</router-link> </li>
        <li><router-link :to="newTransactionLink">New Transaction</router-link> </li>
      </ul>
    </nav>
</template>

<script>
export default {
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
        background-color: #fff;
        box-shadow: 2px 4px 6px rgba(223, 216, 202, 25%);
        border-radius: .5rem;
        padding: .6rem;
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