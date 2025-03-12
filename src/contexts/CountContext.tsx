import { createContext, useMemo, useState } from "react";

// context
export type CountContextType = {
	count: number;
	setCount: React.Dispatch<React.SetStateAction<number>>;
};

export const CountContext = createContext<CountContextType | null>(null);

// context provider-komponent
type CountContextProviderProps = {
	children: React.ReactNode;
};

export function CountContextProvider({
	children,
}: Readonly<CountContextProviderProps>) {
	const [count, setCount] = useState(0);

	const value = useMemo(() => ({ count, setCount }), [count]);
	return (
		<CountContext.Provider value={value}>{children}</CountContext.Provider>
	);
}
