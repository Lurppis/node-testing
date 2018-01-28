const expect = require('expect');
const utils = require('./utils');

describe('Test utils functions:', () => {
	test('Test add:', () =>{
		var result = utils.add(5,5);
		expect(result).toBe(10);
	});
    
	test('Test square:', () => {
		var result = utils.square(5);
		expect(result).toBe(25);
	});
});
