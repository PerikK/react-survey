export default function RadioBtns({ input, setInput }) {
    function handleChange(e) {
        const { name, value } = e.target 
        setInput({...input, [name]:value})
    }

    return (
        <ul>
            <li>
                <input id="color-one" type="radio" name="color" value="1" onChange={handleChange} checked={input.color === '1'} /><label
                htmlFor="color-one"
                >1</label
                >
            </li>
            <li>
                <input id="color-two" type="radio" name="color" value="2" onChange={handleChange} checked={input.color === '2'}/><label
                htmlFor="color-two"
                >2</label
                >
            </li>
            <li>
                <input id="color-three" type="radio" name="color" value="3"onChange={handleChange} checked={input.color === '3'} /><label
                htmlFor="color-three"
                >3</label
                >
            </li>
            <li>
                <input id="color-four" type="radio" name="color" value="4" onChange={handleChange} checked={input.color === '4'}/><label
                htmlFor="color-four"
                >4</label
                >
            </li>
        </ul>
    )
}