import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'; // Utilisez useNavigate au lieu de useHistory

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate(); // Utilisez useNavigate au lieu de useHistory

  const onSubmit = data => {
    setLoginError(null);

    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.status === 'ok') {
        // Connexion réussie, affichez un message et redirigez vers la page d'accueil
        alert('Connexion réussie !');
        navigate('/'); // Utilisez navigate au lieu de history.push
      } else {
        setLoginError(data.error || 'Failed to login. Please try again.');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      setLoginError('Failed to login. Please try again.');
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="email" {...register('email', { required: true })} placeholder="Email" />
      {errors.email && 'Email is required.'}
      
      <input name="password" type="password" {...register('password', { required: true })} placeholder="Password" />
      {errors.password && 'Password is required.'}
      
      {loginError && <div>{loginError}</div>}
      
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
}