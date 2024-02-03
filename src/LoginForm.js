import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const [loginError, setLoginError] = useState(null);
  const [isRegistering, setIsRegistering] = useState(false);
  const [isAccountCreated, setIsAccountCreated] = useState(false); // Nouvel état pour gérer le message
  const navigate = useNavigate();

  const onSubmit = data => {
    if (isRegistering) {
      handleRegister(data);
    } else {
      handleLogin(data);
    }
  };

  const handleLogin = data => {
    setLoginError(null);

    fetch('/frontend/login', {
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
        alert('Connexion réussie !');
        navigate('/');
      } else {
        setLoginError(data.error || 'Failed to login. Please try again.');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      setLoginError('Failed to login. Please try again.');
    });
  };

  const handleRegister = data => {
    fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        nom: data.nom,
        prenom: data.prenom,
        email_confirmation: data.email_confirmation
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.status === 'ok') {
        setIsAccountCreated(true); 
        navigate('/loginForm');
      } else {
        setLoginError(data.error || 'Failed to register. Please try again.');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      setLoginError('Failed to register. Please try again.');
    });
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit(onSubmit)} className="row">
        {isAccountCreated && (
          <div className='alert alert-success'>
            Votre compte a été créé avec succès ! Cliquez sur se connecter
          </div>
        )}

        <div className="col-md-6">
          <input name="email" {...register('email', { required: true })} className="form-control mb-3" placeholder="Email" />
          {errors.email && <div className="text-danger">Email is required.</div>}

          <input name="password" type="password" {...register('password', { required: true })} className="form-control mb-3" placeholder="Password" />
          {errors.password && <div className="text-danger">Password is required.</div>}
        </div>

        {isRegistering && (
          <div className="col-md-6">
            <input name="nom" {...register('nom', { required: true })} className="form-control mb-3" placeholder="Nom" />
            {errors.nom && <div className="text-danger">Nom is required.</div>}

            <input name="prenom" {...register('prenom', { required: true })} className="form-control mb-3" placeholder="Prénom" />
            {errors.prenom && <div className="text-danger">Prénom is required.</div>}

            <input name="email_confirmation" {...register('email_confirmation', { required: true })} className="form-control mb-3" placeholder="Confirm Email" />
            {errors.email_confirmation && <div className="text-danger">Email confirmation is required.</div>}
          </div>
        )}

        {loginError && <div className="text-danger">{loginError}</div>}

        <div className="col-md-12">
          <button type="submit" onClick={() => setIsRegistering(false)} className="btn btn-primary" disabled={isSubmitting}>
            {isSubmitting ? 'Logging in...' : 'Se connecter'}
          </button>

          <button type="submit" onClick={() => setIsRegistering(true)} className="btn btn-secondary ml-md-2 mt-2 mt-md-0" disabled={isSubmitting}>
            {isSubmitting ? 'Registering...' : 'Créer son compte'}
          </button>
        </div>
      </form>
    </div>
  );
}
