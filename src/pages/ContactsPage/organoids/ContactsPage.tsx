import { useEffect, useState } from "react";
import { useActions } from "../../../reducers/hooks/useActions";
import { useTypedSelector } from "../../../reducers/hooks/useTypedSelectore"
import { useSelector } from 'react-redux'
import { Button, FormControl, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ContactsTable } from "../molecules/cont_table";
import { ContactsHeader } from "../molecules/cont_header";
import "../styles/ContactsPage.css"
import { IContact } from "../logic/cont_redux_types";
import { ContactModal } from "../molecules/cont_modal";

export const ContactsPage: React.FC = () => {

    const [search,setSearch]=useState<string>('')
    const { fetchContacts, AddContact, EditContact } = useActions();
    useEffect(() => {
        fetchContacts()
    }, [])
    const { contacts } = useTypedSelector(state => state.contactsState)
    const [filteredContacts,setFilteredContacts] = useState<IContact[]>(contacts)
    const { logedIn } = useTypedSelector(state => state.authState)
    const navigate = useNavigate()
    useEffect(() => {
        if (!logedIn)
            navigate("/auth")
    }, [logedIn])
    useEffect(() => {
        setFilteredContacts(contacts.sort((a,b)=>a.id-b.id))
    }, [contacts])


    const onSearch = (result: string) => {
        setSearch(result)
        const newarray = contacts?.filter(function (item) {
            return (item.id?.toString().indexOf(result.toLocaleLowerCase()) > -1 ||
                item.Name?.toLowerCase().indexOf(result.toLocaleLowerCase()) > -1 ||
                item.Phone?.toString().indexOf(result.toLocaleLowerCase()) > -1)
        })
        if (newarray)
            setFilteredContacts(newarray.sort((a,b)=>a.id-b.id))
    }

    const [modalOpen,setModalOpen]=useState<boolean>(false)
    const [forModal,setForModal]=useState<IContact>({Name:"", Phone:"",id:0})


    return (
        <div className="cont_main">
            {modalOpen?<ContactModal setModalOpen={setModalOpen} forModal={forModal} modalOpen={modalOpen}/>:null}
            <ContactsHeader />
            <div className="cont_content">
                <div className="cont_card">
                    <FormControl value={search} className="cont_form" placeholder="Поиск" onChange={(e) => onSearch(e.target.value)} />
                </div>
                <div className="cont_card">
                    <ContactsTable contacts={filteredContacts} setModalOpen={setModalOpen} setForModal={setForModal} />

                </div>
            </div>

            <footer style={{color:"white"}}>Права не защищены, все делается ради навыка (C) 2022</footer>
        </div>
    )
}