import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}>
					<Route index element={<Home />} />
					<Route path="blogs" element={<Home />} />
					<Route path="contact" element={<Home />} />
					<Route path="*" element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
