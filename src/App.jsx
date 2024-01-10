import './App.css';
import Listing from './components/Listing';
import etsy from './data/etsy.json';

function App() {
	return (
		<Listing items={etsy} />
	);
}

export default App;