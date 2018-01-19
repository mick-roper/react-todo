import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import TodoList from './components/todo-list';

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <TodoList />
            </div>
        );
    }
};