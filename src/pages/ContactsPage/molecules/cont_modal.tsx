
import { useEffect, useState } from "react"
import { Button, FormControl } from "react-bootstrap"
import { IContact } from "../logic/cont_redux_types"
import { ImCross } from "react-icons/im";
import "../styles/ContactsPage.css"
import { useActions } from "../../../reducers/hooks/useActions";

interface IContactModal {
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
    modalOpen: boolean,
    forModal: IContact
}
export const ContactModal = ({ setModalOpen, modalOpen, forModal }: IContactModal) => {
    const [Name, setName] = useState<string>('')
    const [Phone, setPhone] = useState<string>('')
    const [isAdding, setIsAdding] = useState<boolean>(false)
    useEffect(() => {
        if (forModal.Name.length > 0 && forModal.Phone.length > 0) {
            setName(forModal.Name)
            setPhone(forModal.Phone)
            setIsAdding(false)
        }
        else {
            setIsAdding(true)
        }
    }, [modalOpen])

    const { AddContact, EditContact } = useActions()
    return (
        <div className="cont_modal">
            <div className="cont_card cont_modal_content">
                <ImCross
                    style={{ position: "absolute", top: "1rem", right: "1rem", fontSize: "10px", cursor: "pointer", color:'white' }}
                    onClick={() => setModalOpen(false)}>
                </ImCross>
                <h1 style={{color:"white"}}>{isAdding ? "Добавление контакта" : "Редактирование контакта"}</h1>
                <hr />
                <FormControl value={Name} className="cont_form" placeholder="Имя" onChange={(e) => setName(e.target.value)} />
                <FormControl value={Phone} className="cont_form" placeholder="Телефон" onChange={(e) => setPhone(e.target.value)} />
                <hr />
                <Button
                    className="cont_button" disabled={Name.length === 0 || Phone.length === 0}
                    onClick={() => {setModalOpen(false);
                        isAdding ?
                            AddContact(Name, Phone):
                            EditContact(forModal.id, Name, Phone)
                    }}
                >
                    {isAdding ? "Добавить" : "Сохранить"}
                </Button>
            </div>
        </div>
    )
}