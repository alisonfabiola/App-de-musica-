import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import GlobalStyles from './GlobalStyles';

function App() {
return (
    <>
    <GlobalStyles />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
    </Routes>
    </>
);
}

export default App;
