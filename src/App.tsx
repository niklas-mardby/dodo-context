import "./App.scss";
import Counter from "./components/Counter/Counter";
import { CountReducerContextProvider } from "./contexts/CountReducerContext";

function App() {
	return (
		<CountReducerContextProvider>
			<h1>🦤 dodo-context 🦤</h1>
			<p>a context demo</p>
			<Counter />
		</CountReducerContextProvider>
	);
}

export default App;
