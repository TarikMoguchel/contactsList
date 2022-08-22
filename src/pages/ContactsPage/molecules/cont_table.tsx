import { Table } from "react-bootstrap"
import { IContact } from "../logic/cont_redux_types"
import { FiPlusCircle } from "react-icons/fi";
import { AiFillDelete,AiFillEdit } from "react-icons/ai";
import { useActions } from "../../../reducers/hooks/useActions";

interface IContactsTable {
    contacts: IContact[]
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
    setForModal: React.Dispatch<React.SetStateAction<IContact>>
}

export const ContactsTable = ({ contacts,setModalOpen,setForModal }: IContactsTable) => {

    const {DeleteContact} = useActions();
    return (
        <Table>
            <thead>
                <tr className="cont_td">
                    <th>Id</th>
                    <th>Имя</th>
                    <th>Телефон</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {contacts.map((item, i) => {
                    return (
                        <tr key={i} className="cont_td">
                            <td>{item.id}</td>
                            <td>{item.Name}</td>
                            <td>{item.Phone}</td>
                            <td className="cont_add_td" onClick={()=>{setModalOpen(true); setForModal({Name:item.Name, Phone:item.Phone,id:item.id})}}><AiFillEdit/></td>
                            <td className="cont_add_td" onClick={()=>DeleteContact(item.id)}><AiFillDelete/></td>
                        </tr>

                    )
                })}
                <tr>
                    <td className="cont_add_td" colSpan={5} onClick={()=>{setModalOpen(true); setForModal({Name:"", Phone:"",id:0})}}><FiPlusCircle/> Добавить контакт  </td>
                </tr>
            </tbody>
        </Table>
    )
}