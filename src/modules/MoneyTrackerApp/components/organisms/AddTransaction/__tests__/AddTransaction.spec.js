import { shallowMount } from '@vue/test-utils';
import AddTransaction from './../AddTransaction.vue';
import FormTransaction from './../FormTransaction/FormTransaction.vue';

describe('when renders', () => {

    const $target = shallowMount(AddTransaction);

    it('should have AddTransaction name', () => {
        expect($target.vm.$options.name).toBe('AddTransaction');
    })

    it('should render FormTransaction', () => {
        expect($target.findComponent(FormTransaction).exists()).toBe(true);
    });

});
