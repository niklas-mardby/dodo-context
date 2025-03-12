import { useContext } from "react";
import { AnotherCountContext } from "../../contexts/AnotherCountContext";

export default function AddCount() {
	const context = useContext(AnotherCountContext);

	return (
		<div>
			<h2>AddCount</h2>
			<p>Count: {context?.count}</p>
			<button
				onClick={() => {
					context?.add();
				}}
			>
				Add
			</button>
			<button
				onClick={() => {
					context?.subtract();
				}}
			>
				Subtract
			</button>
		</div>
	);
}
