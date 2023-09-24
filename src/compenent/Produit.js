import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function BlogList() {
    const [produit, setProduit] = useState([]);
    const [affichage, setAffichage] = useState(false);
    const [titre, setTitre] = useState('');
    const [contenu, setContenu] = useState('');
    const [validated, setValidated] = useState(false);

    
    // Ajouter des trucs 
    const handleSubmit = async (e) => {
        e.preventDefault();
        

        try {
            const response = await fetch('http://localhost:8000/api/Ajt', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ titre, contenu }),
            });

            if (response.ok) {
                // Le document a été créé avec succès, vous pouvez gérer la réponse ici
                console.log('Document créé avec succès');
                alert("Votre document est crée avec succès")
                window.location.reload();
            } else {
                console.error('Erreur lors de la création du document');
            }
        } catch (error) {
            console.error('Erreur lors de la requête', error);
        }

        
    };

    const recup = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/produit');
            const data = response.data;
            setProduit(data);
            setAffichage(true);
        } catch (error) {
            console.error('Erreur lors de la récupération des données', error);
        }
    };

    useEffect(() => {
        recup();
    }, []);

    return (
        <div className="container mt-5">
            <h1 className="text-muted">Liste des Blogs</h1>
            <ul>
                {affichage ? (
                    produit.map((produit) => (
                        <li key={produit._id}>
                            <h2 className="text-primary">{produit.titre}</h2>
                            <p className="text-muted">{produit.contenue}</p> 
                        </li>
                    ))
                ) : (
                    <p>Chargement ...</p>
                )}
            </ul>

            <form onSubmit={handleSubmit}>
                
                <div className="mb-3">
                    <label className="form-label">Titre:</label>
                    <input type="text"className="form-control" value={titre}
                        name="titre" onChange={(e) => setTitre(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contenu:</label>
                    <textarea className="form-control"value={contenu} name="contenu"
                        onChange={(e) => setContenu(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Créer</button>
                <button><Link to={'/Del'}> Supprimer un articles </Link></button>
            </form>
        </div>
    );
}
