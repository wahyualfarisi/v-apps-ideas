import { mount } from '@vue/test-utils';
import TheHeader from '@/components/TheHeader/TheHeader.vue';

describe('TheHeader.vue', () => {

    it('renders props.title when passed', () => {
        const msg = "App Name";
        const wrapper = mount(TheHeader, {
            props: {
                title: msg
            }
        })
        expect(wrapper.text()).toContain(msg);
    });

});