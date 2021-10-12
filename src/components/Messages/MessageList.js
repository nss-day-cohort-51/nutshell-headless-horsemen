import React, { useEffect, useState } from 'react';
import { getAlls, deleteAnimal } from '../../modules/AnimalManager';
import { AnimalCard } from './AnimalCard';
import { useHistory } from 'react-router';

export const AnimalList = () => {

    const [animals, setAnimals] = useState([]);
    const history = useHistory();

    const getAnimals = () => {
        return getAllAnimals().then(animalsFromAPI => {
            // We'll do something more interesting with this data soon.
            console.log(animalsFromAPI);
            setAnimals(animalsFromAPI);
        });
    };


    const handleDeleteAnimal = id => {
        deleteAnimal(id)
            .then(() => getAllAnimals().then(setAnimals));
    };




    useEffect(() => {
        getAnimals();
    }, []);

    return (
        <>

            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => { history.push("/animals/create") }}>
                    Admit Animal
                </button>
            </section>

            <div className="container-cards">
                {animals.map(animal => <AnimalCard animal={animal} handleDeleteAnimal={handleDeleteAnimal} />)}
            </div>
        </>
    );
};

