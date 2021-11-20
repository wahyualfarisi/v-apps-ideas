import { mount} from '@vue/test-utils';
import FormTransaction from './../FormTransaction.vue';
import FormGroup from './../../../../molecules/FormGroup';
import BaseButton from './../../../../atoms/BaseButton';

const mockRouter = {
    replace: jest.fn()
}

describe('when render properly', () => {
    it('should render form', () => {
        const wrapper = mount(FormTransaction);
        expect( wrapper.exists() ).toBe(true);
    });

    it('should render form-group', () => {
        const wrapper = mount(FormTransaction);
        const formGroupCmp = wrapper.findComponent(FormGroup);
        expect(formGroupCmp.exists()).toBe(true)
    });

    it('should render BaseButton', () => {
        const wrapper = mount(FormTransaction);
        const baseButtonCmp = wrapper.findComponent(BaseButton);
        expect(baseButtonCmp.exists()).toBe(true);
    })
});

describe('when sets the value', () => {
    it('should set value to the title', async () => {
        const wrapper = mount(FormTransaction);
        const inputTitle = wrapper.find('#title');
        const input = "Belanja Keperluan Pribadi";
        await inputTitle.setValue(input);

        expect(inputTitle.element.value).toBe(input);
    });

    it('should set value to the number', async () => {
        const wrapper = mount(FormTransaction);
        const inputNumber = wrapper.find('#mount');
        const input = 15000;
        await inputNumber.setValue(input);

        expect(inputNumber.element.value).toBe(input.toString());
    });

    it('should set value to the type Income', async () => {
        const wrapper = mount(FormTransaction);
        const inputType = wrapper.find('#inc');
        const input = 'inc';
        await inputType.setValue(input);

        expect(inputType.element.value).toBe(input);
    });

    it('should set value to the type Expense', async () => {
        const wrapper = mount(FormTransaction);
        const inputType = wrapper.find('#exp');
        const input = 'exp';
        await inputType.setValue(input);

        expect(inputType.element.value).toBe(input);
    });
});

describe('when trigger click', () => {
    it('should click type income, and set to the value', async () => {
        const wrapper = mount(FormTransaction);

        await wrapper
                .find('[data-test="inc"]')
                .trigger('click')

        const inputType = wrapper.find('#inc');

        expect(inputType.element.value).toBe('inc');        
    });

    it('should click type expance, and set to the value', async () => {
        const wrapper = mount(FormTransaction);

        await wrapper
                .find('[data-test="exp"]')
                .trigger('click')

        const inputType = wrapper.find('#exp');

        expect(inputType.element.value).toBe('exp');        
    });

    it('should submit form, with property submit', async () => {
        const wrapper = mount(FormTransaction);

        await wrapper.findComponent(BaseButton).trigger('submit');


        expect( wrapper.emitted() ).toHaveProperty('submit')
    });

    it('should return false, when data is empty', async () => {
        const wrapper = mount(FormTransaction);
        const isSubmited = await wrapper.vm.submitHandler();

        expect( isSubmited ).toBe(false);
    });

    it('should clear value when form is submited', async () => {
        const wrapper = mount(FormTransaction, {
            data(){
                return {
                    title: {
                        label: 'Title',
                        val: 'Makan malam'
                    },
                    mount: {
                        label: 'Mount',
                        val: '14000'
                    },
                    type: {
                        label: 'Type',
                        val: 'exp'
                    },
                    formInValid: false
                }
            },
            global: {
                mocks: {
                    $router: mockRouter
                }
            }
        });

        await wrapper.vm.submitHandler();

        expect( mockRouter.replace ).toHaveBeenCalledTimes(1);
        expect( mockRouter.replace ).toHaveBeenCalledWith({ name: 'MoneyTrackerTransactionList' })
    });
});