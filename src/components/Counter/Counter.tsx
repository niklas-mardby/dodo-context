import { useCountReducerContext } from "../../contexts/CountReducerContext";

export default function Counter() {
	const { state, dispatch } = useCountReducerContext();

	return (
		<div>
			<h2>Counter (context med reducer)</h2>
			<p>Count: {state.count}</p>
			<button
				onClick={() => {
					dispatch({ type: "INCREMENT", payload: 1 });
				}}
			>
				Add
			</button>
			<button
				onClick={() => {
					dispatch({ type: "DECREMENT", payload: 1 });
				}}
			>
				Subtract
			</button>
		</div>
	);
}
