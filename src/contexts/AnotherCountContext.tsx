import { createContext, useState } from "react";

// context
export type AnotherCountContextType = {
	count: number;
	add: () => void;
	subtract: () => void;
};

export const AnotherCountContext =
	createContext<AnotherCountContextType | null>(null);

// context provider-komponent
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

	return (
		<AnotherCountContext.Provider value={{ count, add, subtract }}>
			{children}
		</AnotherCountContext.Provider>
	);
}
