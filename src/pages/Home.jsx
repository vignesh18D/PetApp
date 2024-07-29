import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Ensure you have the CSS file
import {FaSearch} from 'react-icons/fa'

const Home = () => {
    const [pets, setPets] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [filteredPets, setFilteredPets] = useState([]);

    useEffect(() => {
        const fetchPetData = async () => {
            try {
                const res = await fetch("http://pets-v2.dev-apis.com/pets");
                const data = await res.json();
                setPets(data.pets || []);
                setFilteredPets(data.pets || []); // Initialize filtered pets
                console.log(data.pets); // Log the pet data to verify
            } catch (error) {
                console.error(error);
            }
        };
        fetchPetData();
    }, []);

    const handleImageError = (e) => {
        e.target.src = "https://via.placeholder.com/150";
    };

    const handleSearchChange = (e) => {
        setSearchInput(e.target.value);
        const filtered = pets.filter(pet =>
            pet.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
            pet.breed.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setFilteredPets(filtered);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <section className='list'>
                <div className='header'>
                    <h1 className='title'>P E T S</h1>
                    <form className='search-bar' onSubmit={handleSearchSubmit}>
                        <input
                            type='text'
                            name='search'
                            id='search'
                            placeholder='Search for a Pet / Breed'
                            value={searchInput}
                            onChange={handleSearchChange}
                        />
                          <FaSearch className="search-icon"id="search-icon"></FaSearch> 
                    </form>
                </div>
                <div className='pet-images'>
                    {filteredPets.map((pet) => (
                        <Link to={`/${pet.id}`} key={pet.id} className='pet-card'>
                            <img
                                src={pet.images[0]}
                                alt={pet.name}
                                onError={handleImageError}
                                className='pet-image'
                            />
                            <h3>{pet.name}</h3>
                            <p>Animal: {pet.animal}</p>
                            <p>Breed: {pet.breed}</p>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Home;