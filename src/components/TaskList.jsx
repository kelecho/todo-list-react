import { Checkbox } from "./Checkbox";

export const TaskList = ( props ) => {

    const { list, setList } = props;

    const onChangeStatus = (e) =>{
        console.log("ingresaaaaa")
        const { name, checked } = e.target;
        const updateList = list.map(item => ({
            ...item, 
            done: item.id === name ? checked : item.done 
        }));
        setList(updateList);
    };

    const li_chk = list.map(item => (
        <Checkbox key={item.id} data={item} onChange={ onChangeStatus } />
    ));

    const onClickRemoveItem = (e) => {
      const updateList = list.filter(item => !item.done);
      setList(updateList);
    };

    return (
        <div>
            { list.length ? li_chk : "No Tasks" }
            { list.length ? (
                <p>
                    <button onClick={ onClickRemoveItem }>Delete all done</button>
                </p>
                ) : null }
        </div>
    )
}
