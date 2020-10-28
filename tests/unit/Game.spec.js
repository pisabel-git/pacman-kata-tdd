import Game from '@/Classes/Game'
import PacMan from '@/Classes/PacMan'
import Board from '@/Classes/Board'
import GameVue from '@/components/GameVue'
const { shallowMount } = require("@vue/test-utils")

describe("Game", () => {
    let game;
    beforeEach(()=> {
        game = new Game()
    })
    it("should exist", ()=> {
        expect(game).toBeTruthy()
    })
    it("should contain PacMan", ()=> {
        expect(game.PacMan).toBeInstanceOf(PacMan)
    })
    it("should contain a board", ()=> {
        expect(game.Board).toBeInstanceOf(Board)
    })

    it("should show us the board", ()=> {
        const wrapper = shallowMount(GameVue)
        expect(wrapper.find('.game').exists()).toBeTruthy()
        const byId = wrapper.find('#cell_00')
        expect(byId.text()).toBe('V')
    })
})