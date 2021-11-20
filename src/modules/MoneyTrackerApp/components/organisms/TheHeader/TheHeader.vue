<template>
  <header> 
     <h2>{{ title }}</h2> 
  </header>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
    header {
        margin: 2.5rem 0;
        display: flex;
        justify-content: center;
    }
    h2 {
        font-size: 2.1rem;
        font-weight: 400;
    }
</style>