import { createContext, useContext, useMemo, useState } from "react";

// context
export type AnotherCountContextType = {
	count: number;
	add: () => void;
	subtract: () => void;
};

const AnotherCountContext = createContext<AnotherCountContextType | null>(null);

export const useAnotherCountContext = (): AnotherCountContextType => {
	const context = useContext(AnotherCountContext);

	if (!context) {
		throw new Error(
			"useAnotherCountContext must be used within the provider"
		);
	}
	return context;
};

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

	const value = useMemo(() => ({ count, add, subtract }), [count]);

	return (
		<AnotherCountContext.Provider value={value}>
			{children}
		</AnotherCountContext.Provider>
	);
}
