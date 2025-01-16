import React, { useState, useEffect } from "react";
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://restaurant-api.dicoding.dev/list');
        const jsonData = response.data;
        setData(jsonData);
        console.log(jsonData)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    
  }, []);
  return (
    <div className="flex flex-col space-y-3">
      <h1>Data From API</h1>
      <div className="grid grid-cols-3 gap-4">
        {data.restaurants?.map((item) => (
          <div className="flex flex-col space-y-3  bg-gray-100 rounded-xl p-5" key={item.id}>
            <div className="">
              <img src={`https://restaurant-api.dicoding.dev/images/large/${item.pictureId}`} className="rounded-xl" alt="Gta 6" />
            </div>
            <h2 className="font-bold text-2xl">{item.name}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
