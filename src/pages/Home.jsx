import { Link } from 'react-router-dom';

const Home = () => (
<div style={{ textAlign: 'center' }}>
    <h1>Kodigo Music</h1>
    <p>Explora la mejor música digital al alcance de tus oídos.</p>
    <Link to="/login">
    <button>Iniciar Sesión</button>
    </Link>
</div>
);

export default Home;
