import  AppendMe  from "../index.js";

describe('Appendme class should exist', () => {
    let myClass;

    beforeEach(() => {
        myClass = new AppendMe()
    })
    // it does exist the class
    describe('Class', ()=> {
        test('Should create a new object AppendMe', () => {
            const myClass = new AppendMe();
            expect(myClass instanceof AppendMe).toBe(true);
        });
    })
    describe('Constructor', ()=> {
        test('Should have a mthod named "infoFile"', () =>{
            const myClass = new AppendMe();
            expect(myClass.constructor).toBeDefined();
        });
    })
    describe('Methods Class', ()=> {
        test('Should have a mthod named "infoFile"', () =>{
            const myClass = new AppendMe();
            expect(myClass.infoFile).toBeDefined();
        });
    })

})