const Queue = require('./queue.js');
const list = new Queue();


test('adds one item to list', () => {
	expect(list.push(1)).toBe(1);
});
