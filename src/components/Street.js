import React from 'react';
import Foto1 from '../img/street/5.jpg';
import Foto2 from '../img/street/2.jpg';
import Foto3 from '../img/street/7.jpg';
import Foto4 from '../img/street/15.jpg';
import Foto5 from '../img/street/16.jpg';
import Foto6 from '../img/street/46.jpg';

function Street() {
    const photos = [
        {
            id: 1,
            nombre: "Foto 1",
            descripcion: "MINATO",
            url: Foto1
        },
        {
            id: 2,
            nombre: "Foto 2",
            descripcion: "MINATO",
            url: Foto2
        },
        {
            id: 3,
            nombre: "Foto 3",
            descripcion: "MINATO",
            url: Foto3
        },
        {
            id: 4,
            nombre: "Foto 4",
            descripcion: "MINATO",
            url: Foto4
        },
        {
            id: 5,
            nombre: "Foto 5",
            descripcion: "MINATO",
            url: Foto5
        },
        {
            id: 1,
            nombre: "Foto 1",
            descripcion: "MINATO",
            url: Foto6
        },
        {
            id: 2,
            nombre: "Foto 2",
            descripcion: "MINATO",
            url: Foto1
        },
        {
            id: 3,
            nombre: "Foto 3",
            descripcion: "MINATO",
            url: Foto1
        },
        {
            id: 4,
            nombre: "Foto 4",
            descripcion: "MINATO",
            url: Foto1
        },
        {
            id: 5,
            nombre: "Foto 5",
            descripcion: "MINATO",
            url: Foto1
        }, {
            id: 1,
            nombre: "Foto 1",
            descripcion: "MINATO",
            url: Foto1
        },
        {
            id: 2,
            nombre: "Foto 2",
            descripcion: "MINATO",
            url: Foto1
        },
        {
            id: 3,
            nombre: "Foto 3",
            descripcion: "MINATO",
            url: Foto1
        },
        {
            id: 4,
            nombre: "Foto 4",
            descripcion: "MINATO",
            url: Foto1
        },
        {
            id: 5,
            nombre: "Foto 5",
            descripcion: "MINATO",
            url: Foto1
        }, {
            id: 1,
            nombre: "Foto 1",
            descripcion: "MINATO",
            url: Foto1
        },
        {
            id: 2,
            nombre: "Foto 2",
            descripcion: "MINATO",
            url: Foto1
        },
        {
            id: 3,
            nombre: "Foto 3",
            descripcion: "MINATO",
            url: Foto1
        },

    ];

    return (
        <section className="works">
            <h2>Galería de Fotos</h2>
            <ul className="media-grid">
                {photos.map(photo => (
                    <li key={photo.id} className="media-item">
                        <img src={photo.url} alt={photo.nombre} />
                        <h3>{photo.nombre}</h3>
                        <p>{photo.descripcion}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Street;