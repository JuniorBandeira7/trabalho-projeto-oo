import Header from "../components/Header"
import EditButton from "../components/EditButton"
import RemoveButton from "../components/RemoveButton"
import Button from "../components/Button"

function Item(id, name, cost, qtd){
    this.id = id
    this.name = name
    this.cost = cost
    this.qtd = qtd
}

const item1 = new Item(1, 'Cerveja', 5,99, 80)
const item2 = new Item(2, 'Ice', 7, 100)
const item3 = new Item(3, 'Vodka', 24.99, 80)
const item4 = new Item(4, 'Agua', 4, 200)

let itens = [item1, item2, item3, item4]

export const Stock = () => {
    const handleEdit = (item) => {
        alert(item)
    }

    const handleRemove = (item) => {
        alert(item)
    }

    return(
        <>
            <Header/>
            <main>
                <table>
                    <caption className="mt-6 mb-6">
                        <strong>Estoque</strong>
                    </caption>
                    <tr className="bg-gray-900">
                        <th scope="col">Id</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Custo</th>
                        <th scope="col">Quantidade</th>
                    </tr>
                    {itens.map((item) =>(
                        <tr className="bg-gray-950">
                            <th scope="col">{item.id}</th>
                            <th scope="col">{item.name}</th>
                            <th scope="col">{item.cost}</th>
                            <th scope="col">{item.qtd}</th>
                            <th>
                                <EditButton onClick={() => handleEdit(item.name)}/>
                                <RemoveButton onClick={() => handleRemove(item.cost)}/>
                            </th>
                        </tr>
                    ))}
                </table>
            </main>
            <div className="w100 flex justify-center mt-6">
                <Button>Adicionar item</Button>
            </div>
        </>
    )
}