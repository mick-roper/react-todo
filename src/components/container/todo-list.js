import React from 'react';

import {TodoService} from '../../services/todo-service';
import TodoTable from '../presentation/todo-table';

const todoService = new TodoService();

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            items: []
        }
    }

    componentDidMount() {
        console.log('calling service...');

        todoService
            .getItems(items => {
                console.log('updating state')
                this.setState({
                    loading: false,
                    items: Object.assign([], items)
                })
            });
    }

    render() {
        if (this.state.loading) {
            return (
                <div>
                    <h2>Todo Items</h2>
                    <h3>Loading...</h3>
                </div>
            );
        }

        return (
            <div>
                <h2>Todo Items</h2>
                <TodoTable items={this.state.items} />
            </div>
        );
    }
}