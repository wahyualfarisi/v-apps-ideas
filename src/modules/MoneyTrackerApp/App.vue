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
import TheHeader from './components/organisms/TheHeader/TheHeader';
import Navigation from './components/organisms/Navigation/Navigation';
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
    width: 40%;
    margin: auto;
  }
</style>