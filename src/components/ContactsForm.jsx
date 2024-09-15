import { useDispatch } from "react-redux";
import { addContact } from "../redux/contactsSlice";
import { useState } from "react";

export default function ContactForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleAdd = () => {
    dispatch(addContact({ id: Date.now(), name })); 
    setName("");
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <button onClick={handleAdd}>Add contact</button>
    </div>
  );
}
