import { shallowMount } from '@vue/test-utils';
import TransactionListPage from './../TransactionListPage.vue';
import TheTransactions from './../../organisms/TheTransactions';

describe('when renders', () => {

    it('should render TheTransactions', () => {
        const $target = shallowMount(TransactionListPage);

        expect($target.findComponent(TheTransactions).exists()).toBe(true);
    });

});