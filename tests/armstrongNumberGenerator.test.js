const obj=require('../armstrongNumberGenerator');
describe('IsArmstrongNumber', function() {
    it('it should give true if the number is an armstrong number', function() {
        const output = obj.isArmstrongNumber(2);
        expect(output).toBe(true);
    });
    it('it should give false if the number is not an armstrong number',function(){
        const output=obj.isArmstrongNumber(11);
        expect(output).toBe(false);
    });
    it('should throw invalid input when string is given as input', () => {
        expect(() => obj.isArmstrongNumber('def')).toThrowError('You must provide a number.')
    });

    it('should throw invalid input when array is given as input', () => {
        expect(() => obj.isArmstrongNumber([1,2,3])).toThrowError('You must provide a number.')
    });
    it('should throw invalid input when boolean is given as input', () => {
        expect(() => obj.isArmstrongNumber(true)).toThrowError('You must provide a number.')
    });
    it('should throw invalid input when null is given as input', () => {
        expect(() => obj.isArmstrongNumber(null)).toThrowError('You must provide a number.')
    });
    it('should throw invalid input when no input is given', () => {
        expect(() => obj.isArmstrongNumber()).toThrowError('You must provide a number.')
    });
    it('should throw invalid input when decimal number is given as input', () => {
        expect(() => obj.isArmstrongNumber(152.5)).toThrowError('You must provide an integer.')
    });
    it('should throw invalid input when negative number is given as input', () => {
        expect(() => obj.isArmstrongNumber(-1)).toThrowError('You must provide a non-negative number.')
    });

})
describe('Print Armstrong Number Till N', function() {
    it('it should print armstrong number from 0 till n', function() {
        const output = obj.printArmstrongNumberTillN(2);
        const desiredOutput=[0,1,2];
        expect(output).toEqual(desiredOutput);
    });
    it('should throw invalid input when string is given as input', () => {
        expect(() => obj.printArmstrongNumberTillN('def')).toThrowError('You must provide a number.')
    });

    it('should throw invalid input when array is given as input', () => {
        expect(() => obj.printArmstrongNumberTillN([1,2,3])).toThrowError('You must provide a number.')
    });
    it('should throw invalid input when boolean is given as input', () => {
        expect(() => obj.printArmstrongNumberTillN(true)).toThrowError('You must provide a number.')
    });
    it('should throw invalid input when null is given as input', () => {
        expect(() => obj.printArmstrongNumberTillN(null)).toThrowError('You must provide a number.')
    });
    it('should throw invalid input when no input is given', () => {
        expect(() => obj.printArmstrongNumberTillN()).toThrowError('You must provide a number.')
    });
    
    it('should throw invalid input when decimal number is given as input', () => {
        expect(() => obj.printArmstrongNumberTillN(152.5)).toThrowError('You must provide an integer.')
    });
    it('should throw invalid input when negative number is given as input', () => {
        expect(() => obj.printArmstrongNumberTillN(-1)).toThrowError('You must provide a non-negative number.')
    });

})