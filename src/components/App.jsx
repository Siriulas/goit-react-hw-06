
import ContactList from "./ContactList";
import ContactForm from "./ContactsForm";
import SearchBox from "./SearcBox";


export default function App(){

    return (
        <div>
            <SearchBox />
            <ContactForm />
            <ContactList />
        </div>

    )
}