//app/page.tsx

import Calculator from "./calculator";

export const metadata = {
    title: "App Router",
};

import Counter from "app/counter";

export default function Page() {
    return (
        <>
            <h1>App Router</h1>
            <Calculator />
        </>
    );
}
