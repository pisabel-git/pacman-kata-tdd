const { shallowMount, mount } = require("@vue/test-utils")
import Pacman from '@/components/Pacman.vue'

describe("Pacman.vue",()=> {
    let wrapper;
    beforeEach(()=> {
        wrapper = shallowMount(Pacman)
    })
    it("should exist",()=> {
        expect(wrapper).toBeTruthy()
    })
    it("contains Pacman V",()=> {
        expect(wrapper.find("p.pacman").text()).toEqual('V')
    })
    it("contains only one Pacman",()=> {
        expect(wrapper.findAll("p.pacman")).toHaveLength(1)
    })
})