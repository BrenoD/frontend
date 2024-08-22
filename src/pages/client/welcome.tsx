import React from "react";
import "./welcome.css"

const Welcome: React.FC = () => (
    <div className="bg-yellow-800 total-area">
        <img src="/images/imageSimples.png" alt="logo" height={600} width={600} />
        <div className="welcome">
            <div className="content">
                <strong><h1>Seja Bem vindo</h1><br />
                    <p>Abaixo do QR CODE na mesa</p>
                    <p>existe o numero da mesa, informe-o</p>
                    <p>Aqui embaixo !!!</p>
                </strong>
                <div className="input">
                    <input type="text" id="mesa"
                        placeholder="Informe o numero da mesa" />
                </div>
            </div>
        </div>
    </div>
)

export default Welcome