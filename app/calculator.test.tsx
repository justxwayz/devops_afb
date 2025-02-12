// app/calculator.test.tsx

import { render, screen, fireEvent } from "@testing-library/react";
import Calculator from "../app/Calculator";

test("Addition fonctionne correctement", () => {
    render(<Calculator />);
    const inputA = screen.getByPlaceholderText("Nombre A");
    const inputB = screen.getByPlaceholderText("Nombre B");
    const select = screen.getByRole("combobox");
    const button = screen.getByText("Calculer");
    const result = screen.getByText(/Résultat/i);

    fireEvent.change(inputA, { target: { value: "5" } });
    fireEvent.change(inputB, { target: { value: "3" } });
    fireEvent.change(select, { target: { value: "+" } });
    fireEvent.click(button);

    expect(result).toHaveTextContent("8");
});

test("Soustraction fonctionne correctement", () => {
    render(<Calculator />);
    const inputA = screen.getByPlaceholderText("Nombre A");
    const inputB = screen.getByPlaceholderText("Nombre B");
    const select = screen.getByRole("combobox");
    const button = screen.getByText("Calculer");
    const result = screen.getByText(/Résultat/i);

    fireEvent.change(inputA, { target: { value: "13" } });
    fireEvent.change(inputB, { target: { value: "5" } });
    fireEvent.change(select, { target: { value: "-" } });
    fireEvent.click(button);

    expect(result).toHaveTextContent("8");
});

test("Multiplication fonctionne correctement", () => {
    render(<Calculator />);
    const inputA = screen.getByPlaceholderText("Nombre A");
    const inputB = screen.getByPlaceholderText("Nombre B");
    const select = screen.getByRole("combobox");
    const button = screen.getByText("Calculer");
    const result = screen.getByText(/Résultat/i);

    fireEvent.change(inputA, { target: { value: "4" } });
    fireEvent.change(inputB, { target: { value: "2" } });
    fireEvent.change(select, { target: { value: "*" } });
    fireEvent.click(button);

    expect(result).toHaveTextContent("8");
});

test("Division fonctionne correctement", () => {
    render(<Calculator />);
    const inputA = screen.getByPlaceholderText("Nombre A");
    const inputB = screen.getByPlaceholderText("Nombre B");
    const select = screen.getByRole("combobox");
    const button = screen.getByText("Calculer");
    const result = screen.getByText(/Résultat/i);

    fireEvent.change(inputA, { target: { value: "16" } });
    fireEvent.change(inputB, { target: { value: "2" } });
    fireEvent.change(select, { target: { value: "/" } });
    fireEvent.click(button);

    expect(result).toHaveTextContent("8");
});
