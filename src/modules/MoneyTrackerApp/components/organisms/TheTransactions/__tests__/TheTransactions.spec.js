import { mount } from '@vue/test-utils';
import TheTransactions from './../TheTransactions.vue';

let provide = {
    transactions: [
        { id: 1, title: 'Belanja Bulanans', created_at: '10-05-2021', type: 'exp', total: 500000 },
        { id: 2, title: 'isi bensin', created_at: '10-05-2021', type: 'exp', total: 10000 },
        { id: 3, title: 'Hmmm', created_at: '10-05-2021', type: 'inc', total: 55000 },
    ]
}

describe('TheTransactions.vue', () => {
    
    it('renders transactions total', () => {

        const wrapper = mount(TheTransactions, {
            global: {
                provide: provide
            }
        });
        
        const list = wrapper.get('[data-test="trx"]');
        expect(list.text()).toContain("Belanja")

        const total_exp = wrapper.get('[data-test="total-exp"]');
        expect(total_exp.text()).toBe("510000")

        const total_inc = wrapper.get('[data-test="total-inc"]');
        expect(total_inc.text()).toBe("55000")
        
    });

});