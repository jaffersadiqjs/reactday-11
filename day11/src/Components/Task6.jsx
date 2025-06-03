import React, { useEffect } from 'react';

const ApiFetch = () => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      console.log(data);
    };

    fetchData();
  }, []);

  return (
    <>
    <h2>Task-6</h2>
    <div>API Fetch Example</div>
    </>
  ) 
};

export default ApiFetch;
