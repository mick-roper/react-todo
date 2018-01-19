import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import TodoList from './components/container/todo-list';

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-sticky sticky-top bg-dark flex-md-nowrap p-0">
                    <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">React-Todo</a>
                </nav>
                <Router>
                    <div className="container-fluid">
                        <div className="row">
                            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                                <div className="sidebar-sticky">
                                    <ul className="nav flex-column">
                                    </ul>
                                </div>
                            </nav>
                            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                                <Route exact path="/" component={TodoList} />
                            </main>
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
};