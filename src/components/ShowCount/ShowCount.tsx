import { useContext } from "react";
import { CountContext } from "../../contexts/CountContext";

export default function ShowCount() {
	const context = useContext(CountContext);

	return (
		<div>
			<h2>ShowCount</h2>
			<p>Count: {context?.count}</p>
		</div>
	);
}
