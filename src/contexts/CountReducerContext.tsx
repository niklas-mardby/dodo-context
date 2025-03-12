import {
	createContext,
	Dispatch,
	useContext,
	useMemo,
	useReducer,
} from "react";

// context
export type CountReducerContextType = {
	state: CounterState;
	dispatch: Dispatch<CounterAction>;
};

type CounterState = {
	count: number;
};

type CounterAction =
	| {
			type: "INCREMENT";
			payload: number;
	  }
	| {
			type: "DECREMENT";
			payload: number;
	  }
	| {
			type: "RESET";
	  };

function counterReducer(state: CounterState, action: CounterAction) {
	switch (action.type) {
		case "INCREMENT":
			return { count: state.count + action.payload };
		case "DECREMENT":
			return { count: state.count - action.payload };
		case "RESET":
			return { count: 0 };
		default:
			return state;
	}
}

const CountReducerContext = createContext<CountReducerContextType | null>(null);

export const useCountReducerContext = (): CountReducerContextType => {
	const context = useContext(CountReducerContext);

	if (!context) {
		throw new Error(
			"useAnotherCountContext must be used within the provider"
		);
	}
	return context;
};

// context provider-komponent
type CountReducerContextProviderProps = {
	children: React.ReactNode;
};

export function CountReducerContextProvider({
	children,
}: Readonly<CountReducerContextProviderProps>) {
	const initialState: CounterState = {
		count: 0,
	};

	const [state, dispatch] = useReducer(counterReducer, initialState);

	const value = useMemo(() => ({ state, dispatch }), [state]);
	return (
		<CountReducerContext.Provider value={value}>
			{children}
		</CountReducerContext.Provider>
	);
}
