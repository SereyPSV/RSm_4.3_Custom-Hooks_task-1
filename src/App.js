import { useHover } from './useHover';
import './App.css';

function App() {
	const { hovered, ref } = useHover();

	return (
		<div ref={ref} className="App">
			{hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
		</div>
	);
}
export default App;
