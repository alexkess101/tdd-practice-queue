const Queue = require('./queue.js');
let list = new Queue();

afterEach(() => {
	list = new Queue();
});

test('adds one item to list', () => {
	list.push(1);
	expect(list.queue.length).toBe(1);
});

test('get list size when list is 0', () => {
	expect(list.listSize).toBe(0);
});

test('when adding an item to the queue the size increases', () => {
	list.push(1);
	expect(list.listSize).toBe(1);
});

test("remove something from the list without anything in the list", () => {
	expect(list.pop()).toBe("ERROR");
});

test("push two things off and pop one thing off", () => {
	list.push(1);
	list.push(1);
	list.pop();
	expect(list.listSize).toBe(1);
});

test("push one thing and pop two things", () => {
	list.push(1);
	list.pop();
	expect(list.pop()).toBe("ERROR");
});

test("pop returns a value", () => {
	list.push(1);
	expect(list.pop()).toBe(1);
});

test("push two items and pop returns the last item pushed", () => {
	list.push("first");
	list.push("second");
	expect(list.pop()).toBe("first");
});

test("push two items and pop two items", () => {
	list.push("first");
	list.push("second");
	list.pop();
	expect(list.pop()).toBe("second");
});

test("push three items and pop three items", () => {
	list.push("first");
	list.push("second");
	list.push("third");
	list.pop();
	list.pop();
	expect(list.pop()).toBe("third");
});

test("push three and pop 4", () => {
	list.push("first");
	list.push("second");
	list.push("third");
	list.pop();
	list.pop();
	list.pop();
	expect(list.pop()).toBe("ERROR");
});

test("queue length test", () => {
	list.push("first");
	list.push("second");
	list.push("third");
	expect(list.listSize).toBe(3);
	expect(list.queue.length).toBe(3);
	list.pop();
	list.pop();
	expect(list.listSize).toBe(1);
	expect(list.queue.length).toBe(1);

});