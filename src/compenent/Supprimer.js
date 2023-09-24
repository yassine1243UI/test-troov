import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SuppressionQuestion() {
  const navigate = useNavigate();
  const [titre, setTitre] = useState(''); // State pour stocker le titre

  const suppressionQuestion = async () => {
    try {
      // Envoyez le titre dans le corps de la demande DELETE
      const response = await axios.delete('http://localhost:8000/api/Suppr', {
        data: { titre }
      });

      if (response.status === 200) {
        alert("Suppression réussie");
        navigate("/Produit");
      } else {
        alert("Erreur de suppression");
      }
    } catch (error) {
      console.error('Erreur lors de la suppression du blog :', error);
      alert('Une erreur est survenue lors de la suppression du blog');
    }
  };

  return (
    <div>
      <h1>Suppression du blog</h1>
      <label>
        Entrez le titre à supprimer :
        <input
          type="text"
          value={titre}
          onChange={(e) => setTitre(e.target.value)} // Met à jour le titre dans le state
        />
      </label>
      <button onClick={suppressionQuestion}>Supprimer</button>
    </div>
  );
}
