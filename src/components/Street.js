import React from 'react';
import Foto1 from '../img/street/5.jpg';
import Foto2 from '../img/street/2.jpg';
import Foto3 from '../img/street/7.jpg';
import Foto4 from '../img/street/15.jpg';
import Foto5 from '../img/street/16.jpg';
import Foto6 from '../img/street/47.jpg';
import Foto7 from '../img/street/46.jpg';
import Foto8 from '../img/street/61.jpg';
import Foto9 from '../img/street/27.jpg';
import Foto10 from '../img/street/31.jpg';
import Foto11 from '../img/street/57.jpg';
import Foto12 from '../img/street/58.jpg';
import Foto13 from '../img/street/50.jpg';
import Foto14 from '../img/street/24.jpg';
import Foto15 from '../img/street/20.jpg';
import Foto16 from '../img/street/49.jpg';
import Foto17 from '../img/street/ 9.jpg';


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
            url: Foto7
        },
        {
            id: 3,
            nombre: "Foto 3",
            descripcion: "MINATO",
            url: Foto8
        },
        {
            id: 4,
            nombre: "Foto 4",
            descripcion: "MINATO",
            url: Foto9
        },
        {
            id: 5,
            nombre: "Foto 5",
            descripcion: "MINATO",
            url: Foto10
        }, {
            id: 1,
            nombre: "Foto 1",
            descripcion: "MINATO",
            url: Foto11
        },
        {
            id: 2,
            nombre: "Foto 2",
            descripcion: "MINATO",
            url: Foto12
        },
        {
            id: 3,
            nombre: "Foto 3",
            descripcion: "MINATO",
            url: Foto13
        },
        {
            id: 4,
            nombre: "Foto 4",
            descripcion: "MINATO",
            url: Foto14
        },
        {
            id: 5,
            nombre: "Foto 5",
            descripcion: "MINATO",
            url: Foto15
        }, {
            id: 1,
            nombre: "Foto 1",
            descripcion: "MINATO",
            url: Foto16
        },
        {
            id: 2,
            nombre: "Foto 2",
            descripcion: "MINATO",
            url: Foto17
        },


    ];

    return (
        <section className="works">

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