import { SlPhone, SlUser } from "react-icons/sl"
import css from "./Contact.module.css"

export default function contact({ id, name, number, deleteContact }) {
    return (<>
        <div>
            <h3><SlPhone size={22}/> {name}</h3>
            <h3><SlUser /> {number}</h3>
        </div>
        <button id={id} type="button" onClick={(evt)=>deleteContact(evt.target.id)} >Delete</button>
        </>
    )
}