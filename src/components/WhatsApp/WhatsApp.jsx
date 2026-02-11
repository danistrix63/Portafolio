import React from 'react';
import { MessageCircle } from 'lucide-react';
import './WhatsApp.css';

const WhatsApp = () => {
    const phoneNumber = "34637759861";
    const message = encodeURIComponent("Hola Daniel, vi tu portafolio y me gustaría contactar contigo.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            aria-label="Contactar por WhatsApp"
        >
            <MessageCircle size={32} />
        </a>
    );
};

export default WhatsApp;
