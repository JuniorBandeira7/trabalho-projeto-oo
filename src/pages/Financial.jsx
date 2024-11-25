import Header from "../components/Header"
import EditButton from "../components/EditButton"
import RemoveButton from "../components/RemoveButton"
import Button from "../components/Button"


function Mes(mes, credito, debito, ano){
    this.mes = mes
    this.credito = credito
    this.debito = debito
    this.ano = ano
}

const mes1 = new Mes("Janeiro", 4000, 2000, 2024)
const mes2 = new Mes("Fevereiro", 2000, 3000, 2024)
const mes3 = new Mes("Março", 3000, 1000, 2024)
const mes4 = new Mes("Abril", 10000, 3000, 2024)

let meses = [mes1, mes2, mes3, mes4]

export const Financial = () => {
    const handleEdit = (mes) => {
        alert(mes)
    }

    const handleRemove = (mes) => {
        alert(mes)
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
                        <th scope="col">Mes</th>
                        <th scope="col">Credito</th>
                        <th scope="col">Debito</th>
                        <th scope="col">Ano</th>
                        <th scope="col">Resultado</th>
                    </tr>
                    {meses.map((mes) =>(
                        <tr className={(mes.credito - mes.debito) < 0 ? "bg-red-900" : "bg-blue-900"}>
                            <th scope="col">{mes.mes}</th>
                            <th scope="col">{mes.credito}</th>
                            <th scope="col">{mes.debito}</th>
                            <th scope="col">{mes.ano}</th>
                            <th scope="col">{mes.credito - mes.debito}</th>
                            <th>
                                <EditButton onClick={() => handleEdit(mes.name)}/>
                                <RemoveButton onClick={() => handleRemove(mes.cost)}/>
                            </th>
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