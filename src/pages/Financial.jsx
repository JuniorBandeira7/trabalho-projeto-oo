import Header from "../components/Header"
import EditButton from "../components/EditButton"
import RemoveButton from "../components/RemoveButton"
import Button from "../components/Button"
import ButtonConfirm from "../components/ButtonConfirm"
import { useState } from "react"

export const Financial = () => {
    const [meses, setMeses] = useState([{ id: 1, mes: "Janeiro", credito: 1000, debito: 500, ano: 2024 },
                                        { id: 2, mes: "Fevereiro", credito: 1200, debito: 400, ano: 2024 },
                                        { id: 3, mes: "Março", credito: 3000, debito: 4000, ano: 2024 },
                                        { id: 4, mes: "Abril", credito: 1200, debito: 400, ano: 2024 }
                                    ])
    const [editingMesId, setEditingMesId] = useState(null)
    const [editedMes, setEditedMes] = useState({})

    const handleRemove = (mes) => {
        alert(typeof meses)
    }

    const handleEdit = (mesId) => {
        setEditingMesId(mesId)
        const mesToEdit = meses.find(mes => mes.id === mesId)
        if (mesToEdit) {
          setEditedMes({ ...mesToEdit })
        }
      }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setEditedMes((prevMeses) => ({
            ...prevMeses,
            [name]: name === 'credito' || name === 'debito' ? parseFloat(value) : value
        }))
    }

    return(
        <>
            <Header/>
            <main>
                <table>
                    <caption className="mt-6 mb-6">
                        <strong>Financeiro</strong>
                    </caption>
                    <tr className="bg-gray-900">
                        <th scope="col">Id</th>
                        <th scope="col">Mes</th>
                        <th scope="col">Credito</th>
                        <th scope="col">Debito</th>
                        <th scope="col">Ano</th>
                        <th scope="col">Resultado</th>
                    </tr>
                    {meses.map((mes) =>(
                        <tr className={(mes.credito - mes.debito) < 0 ? "bg-red-900" : "bg-blue-900"}>
                            {editingMesId === mes.id ? (
                                <>
                                    <th scope="col">{mes.id}</th>
                                    <th scope="col"><input type="text" name="mes" value={editedMes.mes} onChange={handleInputChange} style={{color: "black"}}/></th>
                                    <th scope="col"><input type="number" name="credito" value={editedMes.credito} onChange={handleInputChange} style={{color: "black"}}/></th>
                                    <th scope="col"><input type="number" name="debito" value={editedMes.debito} onChange={handleInputChange} style={{color: "black"}}/></th>
                                    <th scope="col"><input type="number" name="ano" value={editedMes.ano} onChange={handleInputChange} style={{color: "black"}}/></th>
                                    <th scope="col">{mes.credito - mes.debito}</th>
                                </>
                            ):(
                                <>
                                    <th scope="col">{mes.id}</th>
                                    <th scope="col">{mes.mes}</th>
                                    <th scope="col">{mes.credito}</th>
                                    <th scope="col">{mes.debito}</th>
                                    <th scope="col">{mes.ano}</th>
                                    <th scope="col">{mes.credito - mes.debito}</th>
                                </>
                            )}
                            {editingMesId === mes.id ? (
                                <>
                                    <th>
                                        <ButtonConfirm> Salvar </ButtonConfirm>
                                    </th>
                                </>
                            ):(
                                <>
                                    <th>
                                        <EditButton onClick={() => handleEdit(mes.id)}/>
                                        <RemoveButton onClick={() => handleRemove(mes.cost)}/>
                                    </th>
                                </>
                            )}
                        </tr>
                    ))}
                </table>
            </main>
            <div className="w100 flex justify-center mt-6">
                <Button>Adicionar mes</Button>
            </div>
        </>
    )
}