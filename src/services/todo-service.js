const items = [];

export class TodoItem {
    constructor(description, due, done) {
        this.description = description || '';
        this.due = due || new Date();
        this.done = done  || false;
    }
}

export default class TodoService {
    getItems() {
        return items;
    }

    add(item) {
        items.push(item);
    }

    remove(item) {
        items.map((i, x) => {
            if (i === item) {
                items.slice(x, 1);
                return;
            }
        })
    }
};