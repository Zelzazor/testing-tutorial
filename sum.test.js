const {sum} = require('./sum');

it('sum equals 3',  () => {
   expect(sum(1, 2)).toBe(3); 
});

it('sum equals -2', () => {
    expect(sum(-1, -1)).toBe(-2);
});