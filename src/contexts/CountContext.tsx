import { createContext, useState } from "react";

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
export default function CountContextProvider({
	children,
}: Readonly<CountContextProviderProps>) {
	const [count, setCount] = useState(0);

	return (
		<CountContext.Provider value={{ count, setCount }}>
			{children}
		</CountContext.Provider>
	);
}
