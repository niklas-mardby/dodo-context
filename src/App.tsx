import "./App.scss";
import AddCount from "./components/AddCount/AddCount";
import NoContext from "./components/NoContext/NoContext";
import ShowCount from "./components/ShowCount/ShowCount";
import { AnotherCountContextProvider } from "./contexts/AnotherCountContext";

function App() {
	return (
		<AnotherCountContextProvider>
			<h1>dodo-context</h1>
			<p>a context demo</p>
			<AddCount />
			<ShowCount />
			<NoContext />
		</AnotherCountContextProvider>
	);
}

export default App;
