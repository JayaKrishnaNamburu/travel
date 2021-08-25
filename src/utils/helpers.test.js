const rewire = require("rewire")
const helpers = rewire("./helpers")
const getMonth = helpers.__get__("getMonth")
// @ponicode
describe("getMonth", () => {
    test("0", () => {
        let callFunction = () => {
            getMonth("December")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            getMonth("July")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            getMonth("June")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            getMonth("January")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            getMonth(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
