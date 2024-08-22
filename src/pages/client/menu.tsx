import React from "react";
import "./menu.css"

const Menu: React.FC = () => (
    <div className="total-area-menu">
        <div className="menu">
            <h1>Lanches</h1>
            <button>
                <div className="name-lanche">
                    <h3>Hamburguer</h3>
                    <h3>R$  16,00</h3>
                </div>
                <p>Pão especial de batata, Bife caseiro de 145g</p>
                <p>Alface, tomate, banana e batata palha</p>
            </button>
            <button>
                <div className="name-lanche">
                    <h3>X-Burguer</h3>
                    <h3>R$  17,00</h3>
                </div>
                <p>Pão especial de batata, Bife caseiro de 145g, queijo</p>
                <p>Alface, tomate, banana e batata palha</p>
            </button>
            <button>
                <div className="name-lanche">
                    <h3>X-Egg</h3>
                    <h3>R$  19,00</h3>
                </div>
                <p>Pão especial de batata, Bife caseiro de 145g, queijo, ovo</p>
                <p>Alface, tomate, banana e batata palha</p>
            </button>
            <button>
                <div className="name-lanche">
                    <h3>X-Bacon</h3>
                    <h3>R$  20,00</h3>
                </div>
                <p>Pão especial de batata, Bife caseiro de 145g, queijo,</p>
                <p>bacon, alface, tomate, banana e batata palha</p>
            </button>
            <button>
                <div className="name-lanche">
                    <h3>X-Calabresa</h3>
                    <h3>R$  20,00</h3>
                </div>
                <p>Pão especial de batata, Bife caseiro de 145g, queijo, </p>
                <p>calabresa, alface, tomate, banana e batata palha</p>
            </button>
            <button>
                <div className="name-lanche">
                    <h3>X-Egg Bacon</h3>
                    <h3>R$  21,00</h3>
                </div>
                <p>Pão especial de batata, Bife caseiro de 145g, queijo,</p>
                <p>bacon, ovo, alface, tomate, banana e batata palha</p>
            </button>
            <button>
                <div className="name-lanche">
                    <h3>X-Tudo</h3>
                    <h3>R$  23,00</h3>
                </div>
                <p>Pão especial de batata, Bife caseiro de 145g, queijo,</p>
                <p>bacon, ovo, presunto, alface, tomate, banana e batata palha</p>
            </button>
            <button>
                <div className="name-lanche">
                    <h3>Moda da Casa</h3>
                    <h3>R$  28,00</h3>
                </div>
                <p>Pão especial de batata, Bife caseiro de 145g, queijo</p>
                <p>2x bacon, 2x ovo, presunto, alface, tomate, banana e batata palha</p>
            </button>

            <hr />

            <h1>Petiscos</h1>
            <button>
                <div className="name-lanche">
                    <h3>Porção de Quibe</h3>
                    <h3>R$  17,00</h3>
                </div>
            </button>
            <button>
                <div className="name-lanche">
                    <h3>Frango à passarinho</h3>
                    <h3>R$  32,00</h3>
                </div>
            </button>
            <button>
                <div className="name-lanche">
                    <h3>Isca de Frango Empanado</h3>
                    <h3>R$  45</h3>
                </div>
            </button>
            <button>
                <div className="name-lanche">
                    <h3>Filé de Pernil Suíno</h3>
                    <h3>R$  35,00</h3>
                </div>
            </button>
            <button>
                <div className="name-lanche">
                    <h3>Filé de Tilápia empanada</h3>
                    <h3>R$  53,00</h3>
                </div>
            </button>
            <button>
                <div className="name-lanche">
                    <h3>Filé de Boi</h3>
                    <h3>R$  50,00</h3>
                </div>
            </button>
            <button>
                <div className="name-lanche">
                    <h3>Bem bolado</h3>
                    <h3>R$  116,00</h3>
                </div>
                <p>400g de Filé de alcatra, 270g de frango a passarinho, 200g de batata frita, 200g de aimpim frito, torresmo</p>
                <p>alface, tomate, palmito, pepino e azeitona</p>
            </button>
            <button>
                <div className="name-lanche">
                    <h3>Carne na tábua</h3>
                    <h3>R$  169,00</h3>
                </div>
                <p>400g de File de boi, 450g de frango a passarinho,400g de batata frita, 400g de aimpim frito</p>
                <p>200g de torresmo,300g de calabresa, banana frita,ovo de codorna,alface, tomate, palmito,</p>
                <p>azeitonae pepino</p>
            </button>
            <button>
                <div className="name-lanche">
                    <h3>Batata Frita</h3>
                    <h3>R$  18,00</h3>
                </div>
                <p>400g de batata frita</p>
            </button>
            <button>
                <div className="name-lanche">
                    <h3>Aipim Frito</h3>
                    <h3>R$  17,00</h3>
                </div>
                <p>400g de aipim frito</p>
            </button>
            <button>
                <div className="name-lanche">
                    <h3>Palmito</h3>
                    <h3>R$  16,00</h3>
                </div>
            </button>
            <button>
                <div className="name-lanche">
                    <h3>Calabresa acebolada</h3>
                    <h3>R$  24,00</h3>
                </div>
            </button>
            <button>
                <div className="name-lanche" >
                    <h3>Torresmo</h3>
                    <h3>R$  20,00</h3>
                </div>
            </button>
            <button>
                <div className="name-lanche">
                    <h3>Batata Cheedar e Bacon</h3>
                    <h3>R$  28,00</h3>
                </div>
            </button>
            <button>
                <div className="name-lanche">
                    <h3>Salaminho</h3>
                    <h3>R$  19,00</h3>
                </div>
            </button>
            <button>
                <div className="name-lanche">
                    <h3>Queijo provolone</h3>
                    <h3>R$  20,00</h3>
                </div>
            </button>
            <button>
                <div className="name-lanche">
                    <h3>Salada fria</h3>
                    <h3>R$  51,00</h3>
                </div>
                <p>Alface, tomate, azeitona, pepino, palmito, salaminho, ovo de codorna</p>
            </button>

            <hr />

            <h1>Bebidas</h1>
            <button>
                <div className="name-lanche">
                    <h3>Água mineral</h3>
                    <h3>R$  3,00</h3>
                </div>
            </button>
            <button>
                <div className="name-lanche">
                    <h3>Água com gás</h3>
                    <h3>R$  4,00</h3>
                </div>
            </button>
            <button>
                <div className="name-lanche">
                    <h3>Refrigerante Juninho</h3>
                    <h3>R$  4,00</h3>
                </div>
            </button>
            <button>
                <div className="name-lanche">
                    <h3>Refrigerante Lata</h3>
                    <h3>R$  6,00</h3>
                </div>
            </button>
            <button>
                <div className="name-lanche">
                    <h3>Refrigerante 600ml</h3>
                    <h3>R$  9,00</h3>
                </div>
            </button>
            <button>
                <div className="name-lanche">
                    <h3>Refrigerante 1L</h3>
                    <h3>R$  9,00</h3>
                </div>
            </button>
            <button>
                <div className="name-lanche">
                    <h3>Refrigerante 1,5L</h3>
                    <h3>R$  11,00</h3>
                </div>
            </button>
            <button>
                <div className="name-lanche">
                    <h3>Refrigerante 2L</h3>
                    <h3>R$  14,00</h3>
                </div>
            </button>
            <button>
                <div className="name-lanche">
                    <h3>Suco Natural</h3>
                    <h3>R$  7,00</h3>
                </div>
                <p>Sabores:</p><br />
                <p>Laranja, maracuja, graviola, abacaxi, manga, limonada suiça, acerola e morango</p>
            </button>
            <button>
                <div className="name-lanche">
                    <h3>Jarra de suco Natural</h3>
                    <h3>R$  14,00</h3>
                </div>
                <p>Sabores:</p><br />
                <p>Laranja, maracuja, graviola, abacaxi, manga, limonada suiça, acerola e morango</p>
            </button>

            <hr />

            <h1>Bebidas Alcoolicas</h1>
            <button>
                <div className="name-lanche">
                    <h3>Latão de cerveja</h3>
                    <h3>R$  7,00</h3>
                </div>
                <p>Brahma, skol, antartica</p>
            </button>
            <button>
                <div className="name-lanche">
                    <h3>Long Neck</h3>
                    <h3>R$  10,00</h3>
                </div>
            </button>
            <button>
                <div className="name-lanche">
                    <h3>0% Alcool</h3>
                    <h3>R$  9,00</h3>
                </div>
            </button>
            <button>
                <div className="name-lanche">
                    <h3>Cerveja 600ml</h3>
                    <h3>R$  10,00</h3>
                </div>
            </button>
            <button>
                <div className="name-lanche">
                    <h3>Cerveja Original</h3>
                    <h3>R$  12,00</h3>
                </div>
            </button>
            <button>
                <div className="name-lanche">
                    <h3>Heineken</h3>
                    <h3>R$  15,00</h3>
                </div>
            </button>
            <button>
                <div className="name-lanche">
                    <h3>Cerveja Litrão</h3>
                    <h3>R$  13,00</h3>
                </div>
            </button>
            <button>
                <div className="name-lanche">
                    <h3>Caipirinha</h3>
                    <h3>R$  10,00</h3>
                </div>
            </button>
            <button>
                <div className="name-lanche">
                    <h3>CaipVodka</h3>
                    <h3>R$  14,00</h3>
                </div>
            </button>
            <button>
                <div className="name-lanche">
                    <h3>Vinho</h3>
                    <h3>R$  10,00</h3>
                </div>
            </button>
            <button>
                <div className="name-lanche">
                    <h3>Campari</h3>
                    <h3>R$  10,00</h3>
                </div>
            </button>
        </div>
    </div>
)

export default Menu