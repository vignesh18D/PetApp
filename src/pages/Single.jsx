import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Single.css'; // Import the CSS file

const Singlepet = () => {
    const { id } = useParams();
    const [pet, setPet] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPetDetails = async () => {
            try {
                const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);
                if (!res.ok) {
                    throw new Error(`Error: ${res.statusText}`);
                }
                const data = await res.json();
                if (data.pets && data.pets.length > 0) {
                    setPet(data.pets[0]);
                } else {
                    throw new Error("Pet not found");
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchPetDetails();
    }, [id]);

    if (loading) {
        return <h1 className='loading'>Loading..</h1>;
    }

    if (error) {
        return <h1 className='error'>{error}</h1>;
    }

    return (
        <div className='single-pet-container'>
            <div className='pet-images'>
                {pet.images.length === 1 ? (
                    <img src={pet.images[0]} alt={pet.name} className='pet-image single-image' />
                ) : (
                    pet.images.map((image, index) => (
                        <img src={image} alt={`${pet.name} ${index}`} key={index} className='pet-image' />
                    ))
                )}
            </div>
            <div className='pet-details-box'>
                <div className='change'>
                    <p><strong>Animal:</strong> {pet.animal}</p>
                    <p><strong>City:</strong> {pet.city}</p>
                    <p><strong>Breed:</strong> {pet.breed}</p>
                    <p><strong>State:</strong> {pet.state}</p>
                    <p><strong>Description:</strong> {pet.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Singlepet;