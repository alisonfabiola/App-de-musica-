import { useForm } from 'react-hook-form';

const Login = () => {
const { register, handleSubmit, formState: { errors } } = useForm();

const onSubmit = (data) => alert(`Bienvenido, ${data.email}!`);

return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '400px', margin: 'auto' }}>
    <h2>Iniciar Sesión</h2>

    <input
        {...register('email', { required: 'El correo es obligatorio' })}
        type="email"
        placeholder="Correo"
    />
    {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}

    <input
        {...register('password', { required: 'La contraseña es obligatoria' })}
        type="password"
        placeholder="Contraseña"
    />
    {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}

    <button type="submit">Ingresar</button>
    </form>
);
};

export default Login;
