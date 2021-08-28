const rewire = require("rewire")
const baseline = rewire("./baseline")
const compress = baseline.__get__("compress")
// @ponicode
describe("compress", () => {
    test("0", () => {
        let callFunction = () => {
            compress("navix377.py")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            compress(":")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            compress("libclang.dylib")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            compress("decoder.hh")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            compress("libclang.dll")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            compress(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
