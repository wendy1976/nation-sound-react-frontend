import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loginError, setLoginError] = useState(null);

  const onSubmit = data => {
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Handle the response here. For example, update the global state and redirect the user.
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
      
      <input type="submit" />
    </form>
  );
}