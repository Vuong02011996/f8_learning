import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { addTodo } from '../../redux_core/actions';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { searchTextSelector, todoListSelector } from '../../redux_core/selectors';

export default function TodoList() {
    const [todoName, setTodoName] = useState('');
    const [priority, setPriority] = useState('Medium');
    const dispatch = useDispatch();

    const todoList = useSelector(todoListSelector);
    const searchText = useSelector(searchTextSelector);
    console.log('todoList: ', todoList);
    console.log('searchText: ', searchText);

    const handleAddButton = () => {
        dispatch(addTodo({ id: uuidv4(), name: todoName, completed: false, priority: priority }));
        setTodoName('');
        setPriority('Medium');
    };

    const handleChangeInput = (e) => {
        setTodoName(e.target.value);
    };

    const handleChangePriority = (value) => {
        // ở đây dùng Select của antd nên giá trị value trả về là object: {value: 'High'}
        // Cái value này lấy từ value của Select.Option
        setPriority(value);
    };

    return (
        <Row style={{ height: 'calc(100% - 40px)' }}>
            <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
                {todoList.map((todo) => {
                    // console.log('todo: ', todo);
                    return <Todo key={todo.id} name={todo.name} priority={todo.priority} />;
                })}
            </Col>
            <Col span={24}>
                <Input.Group style={{ display: 'flex' }} compact>
                    <Input value={todoName} onChange={handleChangeInput} />
                    <Select defaultValue="Medium" value={priority} onChange={handleChangePriority}>
                        <Select.Option value="High" label="High">
                            <Tag color="red">High</Tag>
                        </Select.Option>
                        <Select.Option value="Medium" label="Medium">
                            <Tag color="blue">Medium</Tag>
                        </Select.Option>
                        <Select.Option value="Low" label="Low">
                            <Tag color="gray">Low</Tag>
                        </Select.Option>
                    </Select>
                    <Button type="primary" onClick={handleAddButton}>
                        Add
                    </Button>
                </Input.Group>
            </Col>
        </Row>
    );
}
