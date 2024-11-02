import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

const Login = () => {
const { register, handleSubmit, formState: { errors } } = useForm();
const navigate = useNavigate();

const onSubmit = (data) => {
    console.log(data);
    navigate('/home');
};

return (
    <div className="container d-flex justify-content-center mt-5">
    <div className="col-md-6 col-lg-4">
        <h1 className="text-center">Iniciar Sesión</h1>
        <Form onSubmit={handleSubmit(onSubmit)} className="p-4 shadow rounded">
        <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control 
                type="email" 
                placeholder="Enter email" 
                isInvalid={!!errors.email}
            {...register('email', {
                required: 'El email es obligatorio',
                pattern: { value: /\S+@\S+\.\S+/, message: 'El formato del email es incorrecto' },
            })} 
            />
            <Form.Control.Feedback type="invalid">
            {errors.email && errors.email.message}
            </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control 
                type="password" 
                placeholder="Password" 
                isInvalid={!!errors.password}
            {...register('password', {
                required: 'La contraseña es obligatoria',
                minLength: { value: 6, message: 'La contraseña debe tener al menos 6 caracteres' },
            })} 
            />
            <Form.Control.Feedback type="invalid">
            {errors.password && errors.password.message}
            </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
            Iniciar sesión
        </Button>
        </Form>
    </div>
    </div>
    );
};

export default Login;
