import React from 'react';
import quotes from './QuoteDB';

export default function QuoteAndAuthor(props) {
    const { quote, generateRandomQuote } = props;

    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIOJ57wp02487w1wQ00X8tIPj-hazeKM9Rcw&usqp=CAU" alt="Avatar" className ="imag"/>
                    <h2> Jmaatna Zeyna </h2>
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
