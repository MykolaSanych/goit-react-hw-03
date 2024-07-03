import Contact from "../Contact/Contact"
import css from "./ContactList.module.css"

export default function ContactList({ contactBase, deleteContact }) {
    return (
        <ul>
            {contactBase.map((contact) => {
                return <li key={contact.id} className={css.contactCard} >
                    <Contact id={contact.id} name={contact.name} number={contact.number} contactId={contact.id} deleteContact={deleteContact} />
                </li>
            })}
        </ul>
    )
}