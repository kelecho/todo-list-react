
export const Checkbox = ( props ) => {

    const {
        onChange,
        data: { id, description, done }
    } = props

    return (
        <>
            <label>
                <input
                    name={id} 
                    type="checkbox"
                    defaultChecked={done}
                    onChange={onChange} 
                />
                <div>{description}</div>
            </label>
        </>
    )
}
