import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid'; // Importar el ícono de estrella sólida
import { StarIcon as OutlineStarIcon } from '@heroicons/react/24/outline'; // Importar el ícono de estrella outline

const StarRating = ({ rating }) => {
    const totalStars = 5; // Total de estrellas
    const stars = []; //almacenar las estrellas

    // ciclo para generar las estrellas
    for (let i = 1; i <= totalStars; i++) {
        if (i <= rating) {
            stars.push(
                <StarIcon key={i} className="h-6 w-6 text-yellow-500" /> // Estrella amarilla
            );
        } else {
            stars.push(
                <OutlineStarIcon key={i} className="h-6 w-6 text-yellow-500" /> // Estrella outline
            );
        }
    }

    return (
        <div className="flex space-x-1">
            {stars} {/* Renderizar las estrellas */}
        </div>
    );
};

export default StarRating;
