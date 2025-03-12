import { useAnotherCountContext } from "../../contexts/AnotherCountContext";

export default function AddCount() {
	const { count, add, subtract } = useAnotherCountContext();

	return (
		<div>
			<h2>AddCount</h2>
			<p>Count: {count}</p>
			<button
				onClick={() => {
					add();
				}}
			>
				Add
			</button>
			<button
				onClick={() => {
					subtract();
				}}
			>
				Subtract
			</button>
		</div>
	);
}
