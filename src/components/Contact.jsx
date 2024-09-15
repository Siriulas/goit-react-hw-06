import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/contactsSlice";

export default function Contact({ item }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(item.id));
  };

  return (
    <div>
      <p>Contact: {item.name}</p>
      <button onClick={handleDelete}>Delete contact</button>
    </div>
  );
}
