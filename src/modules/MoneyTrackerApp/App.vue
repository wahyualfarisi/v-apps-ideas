<template>
    <div id="money-tracker">
        <the-header :title="title" />
        
        <navigation />
        
        <main>
            <router-view />
        </main>
    </div>
</template>

<script>
import TheHeader from './components/TheHeader/TheHeader.vue';
import Navigation from './components/Navigation/Navigation.vue';
export default {
    components: {
        TheHeader,
        Navigation
    },
    data(){
        return {
            title: 'Money-Tracker'
        }
    }
}
</script>

<style scoped>
  #money-tracker {
    width: 55%;
    margin: auto;
  }
</style>