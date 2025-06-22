import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Menu from './Pages/Menu/Menu';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
        </Routes>
    );
}