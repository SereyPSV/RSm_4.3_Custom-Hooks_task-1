import { useViewportSize } from './hooks/useViewportSize';
import './App.css';

function App() {
	const { height, width } = useViewportSize();

	return (
		<div className="App">
			Width: {width}, height: {height}
		</div>
	);
}
export default App;
