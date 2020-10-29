const { shallowMount } = require("@vue/test-utils")
import Gameboard from "@/components/Gameboard.vue"

describe('Gameboard', () => {
    let wrapper;
    beforeEach(()=> {
        wrapper = shallowMount(Gameboard, {propsData: {
            size: 3
          }})
    })

    it('should exist', () => {
        expect(wrapper).toBeTruthy()
    })

    xit('should have an instance of Board', () => {
        expect(wrapper.find('.board').exists()).toBeTruthy()
    })

    it("should have a table 3x3", () => {
        expect(wrapper.vm.table).toHaveLength(3)
        expect(wrapper.vm.table[0]).toHaveLength(3)
    })
    it('should be filled with dots', () => {
        let count = 0
        wrapper.vm.table.forEach(line => count += line.filter(cell => cell === '•').length)
        expect(count).toEqual(8)
    });

})