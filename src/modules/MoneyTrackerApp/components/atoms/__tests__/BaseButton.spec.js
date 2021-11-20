import BaseButton from './../BaseButton/BaseButton.vue';
import { mount } from '@vue/test-utils';

describe('BaseButton.vue', () => {

    it('should be visible button', () => {
        const wrapper = mount(BaseButton);
        expect(wrapper.isVisible()).toBe(true)
    });

});