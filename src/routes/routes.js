import { createRouter, createWebHistory } from 'vue-router';
import MainPage from './../pages/MainPage.vue';

//Money Tracker
import MoneyTrackerApp from '../modules/MoneyTrackerApp'; //base container
import MoneyTrackerTransactionList from './../modules/MoneyTrackerApp/pages/TransactionListPage.vue'; //children
import MoneyTrackerAddTransaction from './../modules/MoneyTrackerApp/pages/AddTransactionPage.vue';

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