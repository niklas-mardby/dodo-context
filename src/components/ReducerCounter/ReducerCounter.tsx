import { useReducer } from "react";

type CounterState = {
	count: number;
};

type CounterAction = {
	type: "INCREMENT" | "DECREMENT" | "RESET";
};

function counterReducer(state: CounterState, action: CounterAction) {
	switch (action.type) {
		case "INCREMENT":
			return { count: state.count + 1 };
		case "DECREMENT":
			return { count: state.count - 1 };
		case "RESET":
			return { count: 0 };
		default:
			return state;
	}
}

export default function ReducerCounter() {
	// const [count, setCount] = useState(0);
	const initialState: CounterState = {
		count: 0,
	};

	const [state, dispatch] = useReducer(counterReducer, initialState);

	return (
		<div>
			<h1>ReducerCounter</h1>
			<p>Count: {state.count}</p>
			<button
				onClick={() => {
					dispatch({ type: "INCREMENT" });
				}}
			>
				Add
			</button>
		</div>
	);
}
