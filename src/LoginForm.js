import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const [loginError, setLoginError] = useState(null);

  const onSubmit = data => {
    setLoginError(null); // Réinitialiser les erreurs avant chaque soumission
  
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
      
    .then(response => {
        if (!response.ok) {
          return response.json().then(err => {throw JSON.stringify(err);});
        }
        return response.json();
      })

    .then(data => {
      if (data.status === 'ok') {
        // Stocker le token ou effectuer d'autres actions après une connexion réussie
      } else {
        setLoginError('Failed to login. Please try again.');
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