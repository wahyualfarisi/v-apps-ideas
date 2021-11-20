<template>
   <li> 
        <header>
            <h4>{{ title }}</h4>
            <p>{{ created_at }}</p>
        </header>
        <div class="total_item">
            <h3 :class="type"> {{ symbolTrx }} {{ total }} </h3>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        total: {
            type: Number,
            required: true 
        },
        created_at: {
            type: String,
            required: true
        }
    },
    computed: {
        symbolTrx(){
            return this.type === 'exp' ? '-' : '+'
        }
    }
}
</script>

<style scoped>
  li {
    box-shadow: 2px 2px 6px rgba(223, 216, 202, 25%);
    padding: .5rem;
  }
  li:not(:last-child){
      margin-bottom: 2rem;
  }
  header {
      display: flex;
      justify-content: space-between;
  }
  h4 {
      font-size: .8rem;
      font-weight: 400;
  }
  .exp {
      color: var(--color-red);
  }
  .inc {
      color: var(--color-green);
  }
</style>