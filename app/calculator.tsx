// app/calculator.tsx

"use client";

import { useState } from "react";
import "../styles/calculator.css"

export default function Calculator() {
    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [operator, setOperator] = useState("+");
    const [result, setResult] = useState<number | string>("");

    function calculate() {
        const numA = parseFloat(a);
        const numB = parseFloat(b);
        if (isNaN(numA) || isNaN(numB)) {
            setResult("Veuillez entrer des nombres valides");
            return;
        }
        if (numA === 0 || numB === 0) {
            setResult("Erreur : Diviser par 0 n'est pas possible !");
            return;
        }

        // let operationResult;

        switch (operator) {
            case '+': setResult(numA + numB); break;
            case '-': setResult(numA - numB); break;
            case '*': setResult(numA * numB); break;
            case '/': setResult(numA / numB); break;
            // case '/': operationResult = numB !== 0 numA / numB : "Erreur : Diviser par 0 n'est pas possible !";
            default: setResult("Opérateur non supporté");
        }
    }

    return (
        <div className="calculator">
            <h2>Calculatrice</h2>
            <div className="input-group">
                <input type="text" value={a} onChange={(e) => setA(e.target.value)} placeholder="Nombre A" />
                <select value={operator} onChange={(e) => setOperator(e.target.value)}>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>
                <input type="text" value={b} onChange={(e) => setB(e.target.value)} placeholder="Nombre B" />
            </div>
            <button onClick={calculate}>Calculer</button>
            <div className="result-box">
                <h3 className="result">Résultat : {result}</h3>
            </div>
        </div>
    );
}