import React, { useState } from 'react';
import Foto1 from '../img/Work/1.jpg';
import Foto2 from '../img/Work/2.jpg';
import Foto3 from '../img/Work/3.jpg';
import Foto4 from '../img/Work/5.jpg';
import Foto5 from '../img/Work/6.jpg';
import Foto6 from '../img/Work/7.jpg';
import Foto7 from '../img/Work/9.jpg';
import Foto8 from '../img/Work/10.jpg';
import Foto9 from '../img/Work/11.jpg';
import Foto10 from '../img/Work/22.jpg';
import Foto11 from '../img/Work/12.jpg';
import Foto12 from '../img/Work/24.jpg';
import Foto13 from '../img/Work/15.jpg';
import Foto14 from '../img/Work/17.jpg';
import Foto15 from '../img/Work/18.jpg';
import Foto16 from '../img/Work/19.jpg';
import Foto17 from '../img/Work/21.jpg';
import Foto18 from '../img/Work/W.jpg';

function Works() {
    const [selectedImgId, setSelectedImgId] = useState(null);
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
            id: 6,
            nombre: "Foto 6",
            descripcion: "MINATO",
            url: Foto6
        },
        {
            id: 7,
            nombre: "Foto 7",
            descripcion: "MINATO",
            url: Foto7
        },
        {
            id: 8,
            nombre: "Foto 8",
            descripcion: "MINATO",
            url: Foto8
        },
        {
            id: 9,
            nombre: "Foto 9",
            descripcion: "MINATO",
            url: Foto9
        },
        {
            id: 10,
            nombre: "Foto 10",
            descripcion: "MINATO",
            url: Foto10
        }, 
        {
            id: 11,
            nombre: "Foto 11",
            descripcion: "MINATO",
            url: Foto11
        },
        {
            id: 12,
            nombre: "Foto 12",
            descripcion: "MINATO",
            url: Foto12
        },
        {
            id: 13,
            nombre: "Foto 13",
            descripcion: "MINATO",
            url: Foto13
        },
        {
            id: 14,
            nombre: "Foto 14",
            descripcion: "MINATO",
            url: Foto14
        },
        {
            id: 15,
            nombre: "Foto 15",
            descripcion: "MINATO",
            url: Foto15
        }, 
        {
            id: 16,
            nombre: "Foto 16",
            descripcion: "MINATO",
            url: Foto16
        },
        {
            id: 17,
            nombre: "Foto 17",
            descripcion: "MINATO",
            url: Foto17
        },
        {
            id: 18,
            nombre: "Foto 18",
            descripcion: "MINATO",
            url: Foto18
        },
        // Agrega más fotos aquí
    ];

    const handleImageClick = (id) => {
        setSelectedImgId(selectedImgId === id ? null : id);
    };

    const handleOverlayClick = () => {
        setSelectedImgId(null);
    };
    return (
        <section className="works">
            <ul className="media-grid">
                {photos.map(photo => (
                    <li key={photo.id} className="media-item" onClick={() => handleImageClick(photo.id)}>
                        <img 
                            src={photo.url} 
                            alt={photo.nombre} 
                            className={`thumbnail ${selectedImgId === photo.id ? 'enlarged' : ''}`}
                        />
                        <h3>{photo.nombre}</h3>
                        <p>{photo.descripcion}</p>
                    </li>
                ))}
            </ul>

            {selectedImgId && (
                <div className="overlay" onClick={handleOverlayClick}>
                    <img 
                        src={photos.find(photo => photo.id === selectedImgId).url} 
                        alt="Imagen Ampliada"
                        className="enlarged-img"
                    />
                </div>
            )}
        </section>
    );
}

export default Works;