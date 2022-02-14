const checkRedundancy=require('../redundancyChecker');
describe('check if repeating words present',function(){
    it('it should give true if repeating words are present',function(){
        const output=checkRedundancy('abc def abc');
        expect(output).toBe(true);
    });
    it('it should give false if empty string is passed',function(){
        const output=checkRedundancy('');
        expect(output).toBe(false);
    });
    it('it should give false if none of the words is repeating',function(){
        const output=checkRedundancy('abc def ghi');
        expect(output).toBe(false);
    });
    it('it should give true if words are repeating but are a mix of lower and upper case ',function(){
        const output=checkRedundancy('abc def ABC');
        expect(output).toBe(true);
    });
    it('should throw invalid input when array is given as input', () => {
        expect(() => checkRedundancy([1,2,3])).toThrowError('You must provide a string.')
    });
    it('should throw invalid input when number is given as input', () => {
        expect(() => checkRedundancy(3)).toThrowError('You must provide a string.')
    });
    it('should throw invalid input when number is given as input', () => {
        expect(() => checkRedundancy(3.5)).toThrowError('You must provide a string.')
    });
    it('should throw invalid input when boolean is given as input', () => {
        expect(() => checkRedundancy(true)).toThrowError('You must provide a string.')
    });
    it('should throw invalid input when null is given as input', () => {
        expect(() => checkRedundancy(null)).toThrowError('You must provide a string.')
    });
    it('should throw invalid input when no input is given', () => {
        expect(() => checkRedundancy()).toThrowError('You must provide a string.')
    });
    
});