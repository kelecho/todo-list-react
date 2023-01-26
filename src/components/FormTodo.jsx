import { useState } from "react";

export const FormTodo = (props) => {

    const { handleAddItem } = props

    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();

      handleAddItem({
        done: false,
        id: (+new Date()).toString(),
        description
      })

      console.log(description);
      setDescription("");
    }

    return (
      <form onSubmit={ handleSubmit }>
        <div>  
            <input
                type="text"
                value={description}
                onChange={e => setDescription(e.target.value)}
            />
            <button
                disabled={description ? "" : "disabled"}
            >
                Add
            </button>
        </div>
      </form>
    );
  };