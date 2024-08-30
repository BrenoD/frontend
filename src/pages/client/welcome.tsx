"use client"

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./welcome.css";

const Welcome: React.FC = () => {
    const [mesa, setMesa] = useState("");
    const router = useRouter();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMesa(e.target.value);
    };

    const handleSubmit = () => {
        if (mesa.trim() !== "") {
            sessionStorage.setItem("mesa", mesa);
            router.push("/client/menu");
        } else {
            alert("Por favor, informe o número da mesa.");
        }
    };

    return (
        <div className="bg-yellow-800 total-area">
            <img src="/images/imageSimples.png" alt="logo" height={600} width={600} />
            <div className="welcome">
                <div className="content">
                    <strong>
                        <h1>Seja Bem-vindo</h1><br />
                        <p>Abaixo do QR CODE na mesa</p>
                        <p>existe o número da mesa, informe-o</p>
                        <p>Aqui embaixo !!!</p>
                    </strong>
                    <div className="input">
                        <input
                            type="text"
                            id="mesa"
                            value={mesa}
                            onChange={handleInputChange}
                            placeholder="Informe o número da mesa"
                        />
                        <button onClick={handleSubmit}>Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
