const { shallowMount } = require("@vue/test-utils")
import Gameboard from "@/components/Gameboard.vue"

describe('Gameboard', () => {

    it('should exist', () => {
        const wrapper = shallowMount(Gameboard)
        expect(wrapper).toBeTruthy()
    })

    xit('should have an instance of Board', () => {
        const wrapper = shallowMount(Gameboard)
        expect(wrapper.find('.board').exists()).toBeTruthy()
    })

})