import React from 'react';
import quotes from './QuoteDB';

export default function QuoteAndAuthor(props) {
    const { quote, generateRandomQuote } = props;

    const shareOnTwitter = () => {
        const textToShare = encodeURIComponent(quote.quote);
        window.open(`https://twitter.com/intent/tweet/?text=${textToShare}`);
    };

    const shareOnWhatsApp = () => {
        const textToShare = encodeURIComponent(quote.quote);
        window.open(`https://api.whatsapp.com/send?text=${textToShare}`);
    };

    const shareOnFacebook = () => {
        const textToShare = encodeURIComponent(quote.quote);
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${textToShare}`);
    };

    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIOJ57wp02487w1wQ00X8tIPj-hazeKM9Rcw&usqp=CAU" alt="Avatar" className="imag" />
                    <h2>Jmaatna Zeyna</h2>
                </div>
                <div className="flip-card-back">
                    <p className="card-text">{quote.quote}</p>
                    <div className="button-container">
                        <button onClick={() => generateRandomQuote(quotes)}>
                            <i className="fas fa-mouse"></i> Generate Question
                        </button>
                        <button className="ml-3" onClick={shareOnTwitter}>
                            <i className="fab fa-twitter"></i> Share on Twitter
                        </button>
                        <button className="ml-3" onClick={shareOnWhatsApp}>
                            <i className="fab fa-whatsapp"></i> Share on WhatsApp
                        </button>
                        <button className="ml-3" onClick={shareOnFacebook}>
                            <i className="fab fa-facebook"></i> Share on Facebook
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
