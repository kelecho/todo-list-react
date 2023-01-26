import { useState } from 'react'
import { TaskList } from './TaskList';
import { FormTodo } from './FormTodo';


export const Container = () => {

    const [list, setList ] = useState([]);

    const handleAddItem = item => {
        setList([...list, item]);
    }

    return (
        <>
            <FormTodo handleAddItem={handleAddItem} />
            <TaskList list={ list } setList = { setList } />
        </>
        
    )
}
