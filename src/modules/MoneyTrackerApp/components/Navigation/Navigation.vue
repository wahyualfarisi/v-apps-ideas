<template>
   <nav>
      <ul>
        <li><a href="#" :class="{ active: true }">Data</a> </li>
        <li><a href="#">New Transaction</a> </li>
      </ul>
    </nav>
</template>


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
        font-size: .7rem;
        text-decoration: none;
        color: #111;
        font-weight: 500;
    }
    a.active {
        border-bottom: 1px solid #193498;
    }
    li:not(:last-child){
        margin-right: 1rem;
    }
</style>