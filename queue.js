class Queue {
	constructor() {
		this.listSize = 0;
		this.queue = [];
	}

	push(item) {
		this.queue[this.listSize++] = item;
	}

	shiftQueue() {
		let tempQueue = [];

		for(let i = 0; i < this.listSize; i++) {
			tempQueue[i] = this.queue[i+1];
		}

		this.queue = tempQueue;
	}

	pop() {
		if (this.listSize <= 0) return "ERROR";
		const returnItem = this.queue[0];
		this.listSize--;
		this.shiftQueue();

		return returnItem;
	}
}

module.exports = Queue;
