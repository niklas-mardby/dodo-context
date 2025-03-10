import "./App.scss";
import AddCount from "./components/AddCount/AddCount";
import NoContext from "./components/NoContext/NoContext";
import ShowCount from "./components/ShowCount/ShowCount";
import CountContextProvider from "./contexts/CountContext";

function App() {
	return (
		<CountContextProvider>
			<h1>dodo-context</h1>
			<p>a context demo</p>
			<AddCount />
			<ShowCount />
			<NoContext />
		</CountContextProvider>
	);
}

export default App;
