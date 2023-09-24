import React from 'react';
import Produit from './Produit';
import Inscription from './inscription';
import Connexion from './connexion';
import Sup from './Supprimer';
import '../style/App.css';
import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
           <div className='App'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">Accueil</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/Produit">Produits</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Routes>
                    <Route path="/Produit" element={<Produit />} />
                    <Route path="/" element={<Inscription />} />
                    <Route path="/Conn" element={<Connexion />} />
                    <Route path='/Del' element={<Sup/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
