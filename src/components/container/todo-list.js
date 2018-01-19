import React from 'react';

import {TodoService} from '../../services/todo-service';
import TodoTable from '../presentation/todo-table';

const service = new TodoService();

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    render() {
        return (
            <div>
                <h2>Todo Items</h2>
                <TodoTable items={this.state.items} />
            </div>
        );
    }
}