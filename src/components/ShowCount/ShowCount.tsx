import { useContext } from "react";
import { AnotherCountContext } from "../../contexts/AnotherCountContext";

export default function ShowCount() {
	const context = useContext(AnotherCountContext);

	return (
		<div>
			<h2>ShowCount</h2>
			<p>Count: {context?.count}</p>
		</div>
	);
}
