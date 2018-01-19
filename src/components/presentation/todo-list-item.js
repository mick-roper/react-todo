import {TodoItem} from '../../services/todo-service';

export default ({item}) => (
    <tr>
        <td><span>{item.description}</span></td>
        <td><span>{item.due}</span></td>
        <td><span>{item.done == true ? 'Done' : 'Todo'}</span></td>
    </tr>
);