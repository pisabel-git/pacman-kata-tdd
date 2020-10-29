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
    it("should have as position 0 0 on game begin", () => {
        let position = wrapper.vm.getPosition()
        expect(position).toEqual([0, 0])
    })
    it("should move pacman horizontally or vertically", () => {
        wrapper.vm.moveRight()
        expect(wrapper.vm.getPosition()).toEqual([1, 0])
        wrapper.vm.moveLeft()
        expect(wrapper.vm.getPosition()).toEqual([0, 0])
        wrapper.vm.moveBottom()
        expect(wrapper.vm.getPosition()).toEqual([0, 1])
        wrapper.vm.moveUp()
        expect(wrapper.vm.getPosition()).toEqual([0, 0])
    })

})