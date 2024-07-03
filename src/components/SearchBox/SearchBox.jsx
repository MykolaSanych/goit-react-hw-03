import css from "./SearchBox.module.css"

export default function SearchBox({ inputValue, setInputValue }) {
    const handleChange = (evt) => { setInputValue(evt.target.value) }
    return (
        <div className={css.box}>
            <label>Find contact by name or number</label>
            <input type="text" value={inputValue} onChange={handleChange} />
        </div>
    )
}