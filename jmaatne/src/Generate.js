import React from 'react';
import quotes from './QuoteDB';

export default function QuoteAndAuthor(props) {
    const { quote, generateRandomQuote } = props;

    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src="img_avatar.png" alt="Avatar" style={{ width: "100px", height: "100px", marginTop: "10px" }} />
                    <p style={{ width: "300px", height: "300px", marginTop: "60px" }}> Sewel had men eljema3a </p>
                </div>
                    <div className="flip-card-back">
                        <p className="card-text">{quote.quote}</p>
                        <button
                            onClick={() => { generateRandomQuote(quotes) }}
                            type="submit">
                            <i className="fas fa-mouse"></i> Generate Quote
                        </button>
                        <button
                            className="ml-3"
                            onClick={() => {
                                generateRandomQuote(quotes);
                                window.open('https://twitter.com/intent/tweet/?text=' + encodeURIComponent(quote.quote))
                            }}
                            type="submit">
                            <i className="fab fa-twitter"></i> Share Quote
                        </button>
                    </div>
                </div>
            </div>
    );
}
