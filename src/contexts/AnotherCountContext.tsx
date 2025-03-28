// ===============================================================================
// importera saker

import { createContext, useContext, useMemo, useState } from "react";

// ===============================================================================
// Typa vårt globala state, dvs typa upp vår context
// vad den innehåller är ett designbeslut som beror på vad ska appen handla om
// om vi har en reducer så ska denna innehålla state och dispatch
// count = vad vill du spara i ditt globala state?
// kunde varit animals: string[]

export type AnotherCountContextType = {
	count: number;
	add: () => void;
	subtract: () => void;
};

// ===============================================================================
// skapa contexten (dvs skapa det globala statet)
// createContext kommer ifrån React och skapar contexten
// ge contexten ett namn och byt ut AnotherCountContextType mot din contexts typ

const AnotherCountContext = createContext<AnotherCountContextType | null>(null);

// ===============================================================================
// skapa en custom hook för att paketera contexten så vi ger error om vi är utanför
// providerna och context är null

export const useAnotherCountContext = (): AnotherCountContextType => {
	const context = useContext(AnotherCountContext);

	// if context är null
	if (!context) {
		throw new Error(
			"useAnotherCountContext must be used within the provider"
		);
	}
	// om context inte är null så returnera den
	return context;
};

// ===============================================================================
// Skapa Provider-komponent och typa upp dess props

type AnotherCountContextProviderProps = {
	children: React.ReactNode;
};

export function AnotherCountContextProvider({
	children,
}: Readonly<AnotherCountContextProviderProps>) {
	const [count, setCount] = useState(0);

	const add = () => {
		setCount((prev: number) => prev + 1);
	};

	const subtract = () => {
		setCount((prev: number) => prev - 1);
	};

	// reset
	// dela med 2
	// sätt till 100
	// sätt till 12

	const value = useMemo(() => ({ count, add, subtract }), [count]);

	return (
		<AnotherCountContext.Provider value={value}>
			{children}
		</AnotherCountContext.Provider>
	);
}
