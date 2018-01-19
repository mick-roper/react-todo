export class TodoItem {
    constructor(description, due, done) {
        this.description = description || '';
        this.due = due || new Date();
        this.done = done  || false;
    }
}

export class TodoService {
    constructor() {
        this._items = [
            new TodoItem('do work', new Date(), false),
            new TodoItem('do other', new Date(2018,1,2), true),
        ];

        this.getItems.bind(this.getItems);
        this.add.bind(this.add);
        this.remove.bind(this.remove);
    }

    getItems(cb) {
        setTimeout(() => {
            cb(this._items);
        }, 1200);
    }

    add(item) {
        this._items.push(item);
    }

    remove(item) {
        this._items.map((i, x) => {
            if (i === item) {
                items.slice(x, 1);
                return;
            }
        })
    }
};