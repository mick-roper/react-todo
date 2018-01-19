import React from 'react';

import {TodoService} from '../../services/todo-service';
import TodoTable from '../presentation/todo-table';

const todoService = new TodoService();

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        console.log('calling service...');

        todoService
            .getItems(items => {
                console.log('updating state')
                this.setState({
                    items: Object.assign([], items)
                })
            });
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