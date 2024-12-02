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
    const [isEditing, setIsEditing] = useState(null) // Armazena o ID do item sendo editado
    const [editValues, setEditValues] = useState({ name: "", cost: "", qtd: "" })

    // Função para iniciar o modo de edição
    const startEditing = (item) => {
        setIsEditing(item.id)
        setEditValues({ name: item.name, cost: item.cost, qtd: item.qtd })
    }

    // Função para cancelar a edição
    const cancelEditing = () => {
        setIsEditing(null)
        setEditValues({ name: "", cost: "", qtd: "" })
    }

    // Função para salvar as alterações
    const saveEdit = (id) => {
        setItens(
            itens.map((item) =>
                item.id === id ? { ...item, ...editValues } : item
            )
        )
        cancelEditing()
    }

    // Função para remover um item
    const handleRemove = (id) => {
        setItens(itens.filter((item) => item.id !== id))
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
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {itens.map((item) => (
                            <tr className="bg-gray-950" key={item.id}>
                                <td>{item.id}</td>
                                <td>
                                    {isEditing === item.id ? (
                                        <input
                                            type="text"
                                            value={editValues.name}
                                            onChange={(e) =>
                                                setEditValues({
                                                    ...editValues,
                                                    name: e.target.value,
                                                })
                                            }
                                        />
                                    ) : (
                                        item.name
                                    )}
                                </td>
                                <td>
                                    {isEditing === item.id ? (
                                        <input
                                            type="number"
                                            step="0.01"
                                            value={editValues.cost}
                                            onChange={(e) =>
                                                setEditValues({
                                                    ...editValues,
                                                    cost: parseFloat(e.target.value),
                                                })
                                            }
                                        />
                                    ) : (
                                        item.cost.toFixed(2)
                                    )}
                                </td>
                                <td>
                                    {isEditing === item.id ? (
                                        <input
                                            type="number"
                                            value={editValues.qtd}
                                            onChange={(e) =>
                                                setEditValues({
                                                    ...editValues,
                                                    qtd: parseInt(e.target.value, 10),
                                                })
                                            }
                                        />
                                    ) : (
                                        item.qtd
                                    )}
                                </td>
                                <td>
                                    {isEditing === item.id ? (
                                        <>
                                            <button
                                                className="text-green-500"
                                                onClick={() => saveEdit(item.id)}
                                            >
                                                Salvar
                                            </button>
                                            <button
                                                className="text-red-500 ml-2"
                                                onClick={cancelEditing}
                                            >
                                                Cancelar
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <EditButton
                                                onClick={() => startEditing(item)}
                                            />
                                            <RemoveButton
                                                onClick={() => handleRemove(item.id)}
                                            />
                                        </>
                                    )}
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
