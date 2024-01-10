import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Faq() {
    const [faqs, setFaqs] = useState([
        {
            question: 'Où dormir ?',
            answer: 'Nous vous proposons de planter votre tente sur le Camping du Festival, ou de loger dans les hôtels aux alentours, toutes les informations sont sur notre rubrique : <a href="infos#section2">Logement</a>.'
        },
        {
            question: 'Comment venir ?',
            answer: 'Toutes les informations concernant les transports se trouvent dans la rubrique : <a href="infos#section1">Transport</a>.'
        },
        {
            question: 'Où manger ?',
            answer: 'Nous vous proposons au sein du festival plusieurs points de restauration, que vous trouverez dans notre rubrique : <a href="infos#section3">Restauration</a>.'
        },
        {
            question: 'Comment payer dans l’enceinte du festival ?',
            answer: 'Vous pouvez payer en espèce ou en carte de crédit.'
        },
        {
            question: 'Le lieu ?',
            answer: 'Le festival aura lieu : Route de la grande cascade – 75016 PARIS,nous avons mis à votre disposition une carte interactive afin de mieux vous repérer: ',
            link: '/myMap',
            linkText: 'Carte interactive'
        },
        {
            question: 'Les horaires ?',
            answer: 'L’entrée du festival ouvre le 21 Juin à partir de 14h et ferme le 24 Juin à midi. Les horaires de fermeture de nuit sont de 3h à 10h (sauf pour les campeurs du festival).'
        },
        /* Mise en place d'un caractère unicode 🚫 car FontAwesomeIcon ne fonctionne pas avec dansgerouslySetInnerHTML */
        {
            question: 'Les enfants sont-ils autorisés ?',
            answer: '🚫 Les enfants <strong>de moins de 5 ans</strong> ne sont pas autorisés dans l’enceinte du festival, et ceux de moins de 12 ans déconseillés.'
        },

        {
            question: 'Puis-je apporter de la nourriture ?',
            answer: 'Seuls les petits en-cas, les bouteilles en plastique transparentes et les gourdes sont autorisés. Pour des raisons de sécurité, les bouteilles en verre sont évidemment interdites, tout comme les aérosols et les brumisateurs.'
        },
        {
            question: 'Il y a t-il des fontaines à eau ?',
            answer: 'De nombreuses fontaines à eaux sont mises à votre disposition dans l’enceinte du festival.'
        },
        {
            question: 'Les appareils photos et les caméras sont-ils autorisés ?',
            answer: '🚫<strong>Non</strong>, les caméras, go-pros, selfies sticks et appareils de type reflex ne sont pas autorisés dans l’enceinte du festival.'
        },

        {
            question: 'Les animaux sont-ils autorisés ?',
            answer: '🚫<strong>Non</strong>, les animaux ne sont pas autorisés dans l’enceinte du festival.'
                
        },

        {
            question: 'Puis-je apporter un siège ?',
            answer: '🚫<strong>Non</strong>, pour des raisons de sécurité les sièges, même pliables sont interdits (autorisés dans l’enceinte du camping)'
                
        },
    ]);

    const toggleAnswer = (index) => {
        setFaqs(
            faqs.map((faq, i) =>
                i === index ? { ...faq, isOpen: !faq.isOpen } : faq
            )
        );
    };

    return (
        <div className="faq-section mt-5 pt-3 pb-3">
            {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                    <h2 onClick={() => toggleAnswer(index)} className="faq-question">
                        {faq.isOpen ? '-' : '+'} {faq.question}
                    </h2>
                    {faq.isOpen &&
                        <div className="faq-answer">
                            <span dangerouslySetInnerHTML={{ __html: faq.answer }} />
                            {faq.link && <Link to={faq.link}>{faq.linkText}</Link>}
                        </div>
                    }
                </div>
            ))}
        </div>
    );
}

export default Faq;
