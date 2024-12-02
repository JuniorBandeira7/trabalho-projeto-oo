import React, { useState } from 'react'
import Header from "../components/Header"
import EditButton from "../components/EditButton"
import RemoveButton from "../components/RemoveButton"
import Button from "../components/Button"

// Modelo para criar novos itens
function Item(id, name, cost, qtd) {
    this.id = id
    this.name = name
    this.cost = cost
    this.qtd = qtd
}

// Dados iniciais do estoque
const initialItems = [
    new Item(1, 'Cerveja', 5.99, 80),
    new Item(2, 'Ice', 7, 100),
    new Item(3, 'Vodka', 24.99, 80),
    new Item(4, 'Agua', 4, 200),
]

export const Stock = () => {
    const [itens, setItens] = useState(initialItems)

    // Função para editar (por enquanto só exibe o alerta)
    const handleEdit = (item) => {
        alert(`Editando: ${item.name}`)
    }

    // Função para remover um item
    const handleRemove = (id) => {
        const updatedItems = itens.filter((item) => item.id !== id)
        setItens(updatedItems)
    }

    // Função para adicionar um novo item
    const handleAdd = () => {
        const newItem = new Item(
            itens.length + 1, // Gera o ID automaticamente
            `Item ${itens.length + 1}`, // Nome fictício
            Math.random() * 100, // Custo aleatório
            Math.floor(Math.random() * 200) // Quantidade aleatória
        )
        setItens([...itens, newItem])
    }

    return (
        <>
            <main>
                <table>
                    <caption className="mt-6 mb-6">
                        <strong>Estoque</strong>
                    </caption>
                    <thead>
                        <tr className="bg-gray-900">
                            <th scope="col">Id</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Custo</th>
                            <th scope="col">Quantidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {itens.map((item) => (
                            <tr className="bg-gray-950" key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.cost.toFixed(2)}</td>
                                <td>{item.qtd}</td>
                                <td>
                                    <EditButton onClick={() => handleEdit(item)} />
                                    <RemoveButton onClick={() => handleRemove(item.id)} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
            <div className="w100 flex justify-center mt-6">
                <Button onClick={handleAdd}>Adicionar item</Button>
            </div>
        </>
    )
}
