
import './App.module.css'
import ContactForm from "../ContactForm/ContactForm"
import SearchBox from "../SearchBox/SearchBox"
import ContactList from "../ContactList/ContactList"
import { useEffect, useState } from 'react'
import { number } from 'yup'




export default function App() {
  const [contactBase, setContactBase] = useState(()=> {
    const savedContact = window.localStorage.getItem("saved-contact");
   
    if (savedContact !== null) {
      const contactList = JSON.parse(savedContact);
      console.log(contactList);
      return contactList.contactBase;    
    }
    else {
      return []
    }
  
});

  const [inputValue, setInputValue] = useState(" ");
  const [filter, setFilter] = useState([]);


  useEffect(() => {
    const arr = [];
    contactBase.map((contact) => {
      const { name, number } = contact;
      if (name.toLowerCase().includes(inputValue.toLowerCase().trim())||number.includes(inputValue.trim())) {
        arr.push(contact);
      }
    })
    setFilter(arr);
  }, [inputValue, contactBase, setFilter])
  


  const deleteContact = (id)=> {
    const apdateList = contactBase.filter((contact) => contact.id !== id);
    setContactBase(apdateList);
  }



  useEffect(() => window.localStorage.setItem("saved-contact",JSON.stringify({contactBase}) ),[contactBase] )


  return ( <div>
  <h1>Phonebook</h1>
  <ContactForm contactBase={ contactBase} setContactBase={setContactBase} />
  <SearchBox inputValue={inputValue} setInputValue={setInputValue} />
  <ContactList deleteContact={deleteContact} contactBase={filter}/>
</div>
  )
}
