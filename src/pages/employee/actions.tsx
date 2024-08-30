// Actions.tsx
import React from "react";
import { useMenu } from "../../context/MenuContext";
import "./actions.css";

const Actions: React.FC = () => {
    const { tableNumber, selectedItems } = useMenu();

    return (
        <div className="total-area-actions">
            <div className="select-actions">
                <div className="mesa">
                    <button>Mesa {tableNumber}</button>
                </div>
                <div className="content-mesa">
                    {tableNumber && selectedItems.length > 0 ? (
                        <>
                            <h2>Mesa {tableNumber}</h2>
                            <ul>
                                {selectedItems.map((item, index) => (
                                    <li key={index}>
                                        <h3>{item.name}</h3>
                                        <p>R$ {item.price.toFixed(2)}</p>
                                    </li>
                                ))}
                            </ul>
                        </>
                    ) : (
                        <p>Selecione uma mesa para ver os itens.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Actions;
