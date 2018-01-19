import React from 'react';

export default ({items}) => (
    <table>
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
                    <td><span>{item.due}</span></td>
                    <td><span>{item.done == true ? 'Done' : 'Todo'}</span></td>
                </tr>
            })
        }
        </tbody>
    </table>
);