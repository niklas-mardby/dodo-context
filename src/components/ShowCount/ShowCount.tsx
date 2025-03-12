import { useAnotherCountContext } from "../../contexts/AnotherCountContext";

export default function ShowCount() {
	const { count } = useAnotherCountContext();

	return (
		<div>
			<h2>ShowCount</h2>
			<p>Count: {count}</p>
		</div>
	);
}
