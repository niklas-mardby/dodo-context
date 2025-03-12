import { useReducer } from "react";

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
					dispatch({ type: "INCREMENT", payload: 1 });
				}}
			>
				Increment
			</button>
			<button
				onClick={() => {
					dispatch({ type: "INCREMENT", payload: 10 });
				}}
			>
				+10
			</button>
			<button
				onClick={() => {
					dispatch({ type: "DECREMENT", payload: 1 });
				}}
			>
				Decrement
			</button>
		</div>
	);
}
