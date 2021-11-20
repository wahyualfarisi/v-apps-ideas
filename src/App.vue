<template>
   <router-view /> 
</template>

<script>
export default {
  props: ['bgColor'],
  computed: {

  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  :root {
    --color-green: #105652;
    --color-red: #B91646;
  }

  *,
  *::before,
  *::after {
      box-sizing: inherit;
  }

  html {
      box-sizing: border-box;
  }

  body {
    background-color:#fff;
  }
</style>
