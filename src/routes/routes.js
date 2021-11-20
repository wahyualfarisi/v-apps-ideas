import { createRouter, createWebHistory } from 'vue-router';
//Base Page
import MainPage from './../pages/MainPage.vue';

//Money Tracker
import MoneyTrackerApp from '../modules/MoneyTrackerApp'; //container
import MoneyTrackerTransactionList from './../modules/MoneyTrackerApp/components/pages/TransactionListPage.vue'; //children
import MoneyTrackerAddTransaction from './../modules/MoneyTrackerApp/components/pages/AddTransactionPage.vue'; //children

export const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/money-tracker',
        name: 'MoneyTrackerPage',
        component: MoneyTrackerApp,
        redirect(){
            return {
                name: 'MoneyTrackerTransactionList'
            }
        },
        children: [
            {
                path: 'list-transaction',
                name: 'MoneyTrackerTransactionList',
                component: MoneyTrackerTransactionList
            },
            {
                path: 'add-transaction',
                name: 'MoneyTrackerTransactionAdd',
                component: MoneyTrackerAddTransaction
            }
        ]   
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;