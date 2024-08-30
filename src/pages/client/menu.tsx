import React, { useState, useEffect } from "react";
import { FaHamburger, FaUtensils, FaGlassCheers, FaBeer } from "react-icons/fa";
import { useMenu } from "../../context/MenuContext";  // Certifique-se de que o caminho está correto
import "./menu.css";

interface MenuItem {
    name: string;
    price: number;
    description: string;
}

const Menu: React.FC = () => {
    const { tableNumber, setTableNumber, selectedItems, setSelectedItems } = useMenu();
    const [isFooterExpanded, setIsFooterExpanded] = useState(false);

    useEffect(() => {
        const storedTableNumber = sessionStorage.getItem('mesa');
        setTableNumber(storedTableNumber || 'não definido');
    }, [setTableNumber]);

    const handleItemClick = (item: MenuItem) => {
        setSelectedItems(prevItems => [...prevItems, item]);
    };

    const handleSubmit = () => {
        console.log("Itens enviados:", selectedItems);
        setSelectedItems([]);
    };

    const toggleFooter = () => {
        setIsFooterExpanded(!isFooterExpanded);
    };

    const menuItems: MenuItem[] = [
        { name: "Hamburguer", price: 16, description: "Pão especial de batata, Bife caseiro de 145g, Alface, tomate, banana e batata palha" },
        { name: "X-Burguer", price: 17, description: "Pão especial de batata, Bife caseiro de 145g, queijo, Alface, tomate, banana e batata palha" },
        { name: "X-Egg", price: 19, description: "Pão especial de batata, Bife caseiro de 145g, queijo, ovo, Alface, tomate, banana e batata palha" },
        { name: "X-Bacon", price: 20, description: "Pão especial de batata, Bife caseiro de 145g, queijo, bacon, alface, tomate, banana e batata palha" },
        { name: "X-Calabresa", price: 20, description: "Pão especial de batata, Bife caseiro de 145g, queijo, calabresa, alface, tomate, banana e batata palha" },
        { name: "X-Egg Bacon", price: 21, description: "Pão especial de batata, Bife caseiro de 145g, queijo, bacon, ovo, alface, tomate, banana e batata palha" },
        { name: "X-Tudo", price: 23, description: "Pão especial de batata, Bife caseiro de 145g, queijo, bacon, ovo, presunto, alface, tomate, banana e batata palha" },
        { name: "Moda da Casa", price: 28, description: "Pão especial de batata, Bife caseiro de 145g, queijo, 2x bacon, 2x ovo, presunto, alface, tomate, banana e batata palha" },
        { name: "Porção de Quibe", price: 17, description: "" },
        { name: "Frango à passarinho", price: 32, description: "" },
        { name: "Isca de Frango Empanado", price: 45, description: "" },
        { name: "Filé de Pernil Suíno", price: 35, description: "" },
        { name: "Filé de Tilápia empanada", price: 53, description: "" },
        { name: "Filé de Boi", price: 50, description: "" },
        { name: "Bem bolado", price: 116, description: "400g de Filé de alcatra, 270g de frango a passarinho, 200g de batata frita, 200g de aimpim frito, torresmo, alface, tomate, palmito, pepino e azeitona" },
        { name: "Carne na tábua", price: 169, description: "400g de File de boi, 450g de frango a passarinho,400g de batata frita, 400g de aimpim frito, 200g de torresmo,300g de calabresa, banana frita,ovo de codorna,alface, tomate, palmito, azeitonae pepino" },
        { name: "Batata Frita", price: 18, description: "400g de batata frita" },
        { name: "Aipim Frito", price: 17, description: "400g de aipim frito" },
        { name: "Palmito", price: 16, description: "" },
        { name: "Calabresa acebolada", price: 24, description: "" },
        { name: "Torresmo", price: 20, description: "" },
        { name: "Batata Cheedar e Bacon", price: 28, description: "" },
        { name: "Salaminho", price: 19, description: "" },
        { name: "Queijo provolone", price: 20, description: "" },
        { name: "Salada fria", price: 51, description: "Alface, tomate, azeitona, pepino, palmito, salaminho, ovo de codorna" },
        { name: "Água mineral", price: 3, description: "" },
        { name: "Água com gás", price: 4, description: "" },
        { name: "Refrigerante Juninho", price: 4, description: "" },
        { name: "Refrigerante Lata", price: 6, description: "" },
        { name: "Refrigerante 600ml", price: 9, description: "" },
        { name: "Refrigerante 1L", price: 9, description: "" },
        { name: "Refrigerante 1,5L", price: 11, description: "" },
        { name: "Refrigerante 2L", price: 14, description: "" },
        { name: "Suco Natural", price: 8, description: "" },
        { name: "Cerveja Lata", price: 8, description: "" },
        { name: "Cerveja 600ml", price: 11, description: "" },
        { name: "Caipirinha", price: 10, description: "" },
        { name: "Cachaça", price: 5, description: "" },
        { name: "Whisky", price: 15, description: "" },
        { name: "Vodka", price: 12, description: "" },
    ];

    return (
        <div className="total-area-menu">
            <div className="menu">
                <nav>
                    <ul>
                        <li><a href="#lanches"><FaHamburger /></a></li>
                        <li><a href="#petiscos"><FaUtensils /></a></li>
                        <li><a href="#bebidas"><FaGlassCheers /></a></li>
                        <li><a href="#alcolicas"><FaBeer /></a></li>
                    </ul>
                </nav>

                <section id="lanches">
                    <h1>Lanches</h1>
                    {menuItems.slice(0, 8).map((item, index) => (
                        <button key={index} onClick={() => handleItemClick(item)}>
                            <div className="name-lanche">
                                <h3>{item.name}</h3>
                                <h3>R$ {item.price.toFixed(2)}</h3>
                            </div>
                            <p>{item.description}</p>
                        </button>
                    ))}
                </section>

                <hr />

                <section id="petiscos">
                    <h1>Petiscos</h1>
                    {menuItems.slice(8, 21).map((item, index) => (
                        <button key={index} onClick={() => handleItemClick(item)}>
                            <div className="name-lanche">
                                <h3>{item.name}</h3>
                                <h3>R$ {item.price.toFixed(2)}</h3>
                            </div>
                            <p>{item.description}</p>
                        </button>
                    ))}
                </section>

                <hr />

                <section id="bebidas">
                    <h1>Bebidas</h1>
                    {menuItems.slice(21).map((item, index) => (
                        <button key={index} onClick={() => handleItemClick(item)}>
                            <div className="name-lanche">
                                <h3>{item.name}</h3>
                                <h3>R$ {item.price.toFixed(2)}</h3>
                            </div>
                            <p>{item.description}</p>
                        </button>
                    ))}
                </section>

                <section id="alcolicas">
                    <h1>Alcoólicas</h1>
                    {menuItems.slice(21).map((item, index) => (
                        <button key={index} onClick={() => handleItemClick(item)}>
                            <div className="name-lanche">
                                <h3>{item.name}</h3>
                                <h3>R$ {item.price.toFixed(2)}</h3>
                            </div>
                            <p>{item.description}</p>
                        </button>
                    ))}
                </section>

                <footer className={`footer ${isFooterExpanded ? 'expanded' : ''}`}>
                    <button onClick={toggleFooter} className="expand-button">
                        {isFooterExpanded ? 'Ocultar carrinho' : 'Mostrar carrinho'}
                    </button>
                    {isFooterExpanded && (
                        <div className="cart-info">
                            <h2>Carrinho</h2>
                            <ul>
                                {selectedItems.map((item, index) => (
                                    <li key={index}>
                                        {item.name} - R$ {item.price.toFixed(2)}
                                    </li>
                                ))}
                            </ul>
                            <button onClick={handleSubmit} className="finish">Enviar pedido</button>
                        </div>
                    )}
                </footer>
            </div>
        </div>
    );
};

export default Menu;
