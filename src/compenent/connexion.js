import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/Formulaire.css';
import { useNavigate } from 'react-router-dom';

export default function Connexion() {
  const [email, setEmail] = useState('');
  const [mdp, setMdp] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // État pour le message de succès
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/api/conn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, mdp }),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccessMessage(data.message); 
        alert("connexion réussie");
        navigate("/Produit");

      } else {
        console.error("Erreur lors de la connexion de l'utilisateur");
      }
    } catch (error) {
      console.error('Erreur lors de la requête', error);
    }
  };

  return (
    <div className="center-content">
      <div className="container">
        <form className="form-container" onSubmit={handleSubmit}>
          <label className="form-label">
            Email:
            <input type="text" value={email} name="email" onChange={(e) => setEmail(e.target.value)} />
          </label>
          <br />
          <label className="form-label">
            Mot de passe:
            <input type='password' value={mdp} name="mdp" onChange={(e) => setMdp(e.target.value)} />
          </label>
          <br />
          <button type="submit" className="btn btn-primary form-button">Se connecter</button>
          <Link to="/" className="form-link"> inscription </Link>
        </form>
        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>
    </div>
  );
}
