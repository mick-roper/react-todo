import React from 'react';

export default ({items}) => (
    <table className="table table-striped table-hover">
        <thead>
            <tr>
                <th>description</th>
                <th>due</th>
                <th>done</th>
            </tr>
        </thead>
        <tbody>
        {
            items.map((item, id) => {
                return <tr key={id}>
                    <td><span>{item.description}</span></td>
                    <td><span>{item.due.toISOString()}</span></td>
                    <td><span>{item.done == true ? 'Done' : 'Todo'}</span></td>
                </tr>
            })
        }
        </tbody>
    </table>
);