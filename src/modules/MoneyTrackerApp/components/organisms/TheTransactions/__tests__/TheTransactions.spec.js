import { mount } from '@vue/test-utils';
import TheTransactions from './../TheTransactions.vue';
import Pagination from './../../Pagination/Pagination.vue';
import TransactionItem from './../../../molecules/TransactionItem';
import store from './../../../../../../store';


describe('TheTransactions.vue', () => {
 
    it('Should renders transactions', () => {
        let wrapper = mount(TheTransactions, {
            global: {
                mocks: {
                    $store: store
                }
            }
        });
       expect(wrapper.isVisible()).toBe(true);
    });

    it('Should renders Total', () => {
        let wrapper = mount(TheTransactions, {
            global: {
                mocks: {
                    $store: store
                }
            }
        });
       expect(wrapper.find('.total').exists()).toBe(true);
    });

    it('should renders pagination', () => {
        let wrapper = mount(TheTransactions, {
            global: {
                mocks: {
                    $store: store
                }
            }
        });
        const paginationCmp = wrapper.findComponent(Pagination);
        expect(paginationCmp.exists()).toBe(true);
    });

    it('should not renders pagination', () => {
        let wrapper = mount(TheTransactions, {
            global: {
                mocks: {
                    $store: {
                        getters: {
                            'moneyTracker/getAllTransactions': []
                        }
                    }
                }
            }
        });
        const paginationCmp = wrapper.findComponent(Pagination);
        expect(paginationCmp.exists()).toBe(false);
    });

    it('should not renders transactionITem', () => {
        let wrapper = mount(TheTransactions, {
            global: {
                mocks: {
                    $store: {
                        getters: {
                            'moneyTracker/getAllTransactions': []
                        }
                    }
                }
            }
        });
        const trxItem = wrapper.findComponent(TransactionItem);
        expect(trxItem.exists()).toBe(false);

        const textEmpty = wrapper.find('.transaction-empty');
        expect(textEmpty.text()).toBe('Transaction Empty');
    });

    it('should renders 0 in total incomes && 0 in total expense', () => {
        let wrapper = mount(TheTransactions, {
            global: {
                mocks: {
                    $store: {
                        getters: {
                            'moneyTracker/getAllTransactions': []
                        }
                    }
                }
            }
        });
        expect(wrapper.get('[data-test="total-inc"]').text()).toBe(wrapper.vm.totalIncomes.toString())
        expect(wrapper.get('[data-test="total-exp"]').text()).toBe(wrapper.vm.totalExpenses.toString())
    });

    it  ('should renders 14000000 in total incomes && 500000 in total expense', () => {
        let wrapper = mount(TheTransactions, {
            global: {
                mocks: {
                    $store: {
                        getters: {
                            'moneyTracker/getAllTransactions': [
                                { id: 1, title: 'Belanja Bulanan', created_at: '10-05-2021', type: 'exp', total: 500000 },
                                { id: 2, title: 'Fee Project', created_at: '20-05-2021', type: 'inc', total: 14000000 },
                            ]
                        }
                    }
                }
            }
        });

        expect( wrapper.get('[data-test="total-inc"]').text() ).toBe(wrapper.vm.totalIncomes.toString())
        expect( wrapper.get('[data-test="total-exp"]').text() ).toBe(wrapper.vm.totalExpenses.toString())
    });

    

});