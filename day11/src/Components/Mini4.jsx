import React, { useState, useEffect } from 'react';

const RandomQuoteGenerator = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(`${data.content} - ${data.author}`);
    };

    fetchQuote();
    const intervalId = setInterval(fetchQuote, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
        <h2>Mini-project-4</h2>
      <p>{quote}</p>
    </div>
  );
};

export default RandomQuoteGenerator;