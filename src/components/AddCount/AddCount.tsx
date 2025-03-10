import { useContext } from "react";
import { CountContext } from "../../contexts/CountContext";

export default function AddCount() {
	const context = useContext(CountContext);

	const handleClick = () => {
		context?.setCount((prev: number) => prev + 1);
	};

	return (
		<div>
			<h2>AddCount</h2>
			<p>Count: {context?.count}</p>
			<button onClick={handleClick}>Add</button>
		</div>
	);
}
