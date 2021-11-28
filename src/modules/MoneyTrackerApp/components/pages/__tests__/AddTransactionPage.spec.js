import { shallowMount } from '@vue/test-utils';
import AddTransactionPage from './../../pages/AddTransactionPage.vue';
import AddTransaction from './../../organisms/AddTransaction';

describe('when renders', () => {
    const $target = shallowMount(AddTransactionPage);

    it('should render addTransaction', () => {
        expect(
            $target
            .findComponent(AddTransaction)
            .exists()
        )
        .toBe(true);
    });

});