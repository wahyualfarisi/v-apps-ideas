import { shallowMount } from '@vue/test-utils';
import App from './../../src/App.vue';

describe('Renders App.js', () => {

    it('Renders a div', () => {
        const wrapper = shallowMount(App);
        expect(wrapper.find('.hallo')).toMatch("<div class='hallo'></div>");
    })

});

