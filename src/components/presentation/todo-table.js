import React from 'react';

export default ({items}) => (
    <table className="table table-striped table-hover">
        <thead>
            <tr>
                <th>description</th>
                <th>due</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
        {
            items.map((item, id) => {
                if (!item.done) {
                    return <tr key={id}>
                        <td><span>{item.description}</span></td>
                        <td><span>{item.due.toISOString()}</span></td>
                        <td><button className='btn btn-primary btn-sm' >Complete</button></td>
                    </tr>
                }

                return <tr key={id}>
                    <td><span>{item.description}</span></td>
                    <td><span>{item.due.toISOString()}</span></td>
                    <td><span>Done</span></td>
                </tr>
            })
        }
        </tbody>
    </table>
);