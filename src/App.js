import React, { useState, useEffect } from 'react';
import Snow from './Snow';

const App = () => {

   // Path to public
   const path = process.env.PUBLIC_URL;

   // State: list of all and opened pockets
   const [pockets, setPockets] = useState([]);
   const [opened, setOpened] = useState([]);

   // Get randomized calendar items and save them in localStorage
   useEffect(() => {
      const stored = window.localStorage?.getItem('items');
      if (stored) {
         setPockets(JSON.parse(stored))
      } else {
         const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
         const randomized = numbers.sort(() => 0.5 - Math.random());
         randomized.splice(12, 0, 'x');
         window.localStorage?.setItem('items', JSON.stringify(randomized));
         setPockets(randomized);
      }
   }, []);

   // Retrieve saved data from localStorage
   useEffect(() => {
      const stored = window.localStorage?.getItem('opened');
      if (stored) setOpened(JSON.parse(stored));
   }, []);

   // Update data in localStorage
   useEffect(() => {
      window.localStorage?.setItem('opened', JSON.stringify(opened));
   }, [opened]);

   // Open a pocket
   const open = day => {
      const now = new Date();
      if (Number.isSafeInteger(day) && !opened.includes(day) && now.getDate() >= day) {
         setOpened([ ...opened, day ]);
      }
   };

   // Render calendar
   return (
      <div className="container">
         <Snow />
         <img className="background" src={`${path}/images/background.jpg`} alt="Photo by form PxHere" />
         <div className="calendar">
            {pockets.map((item, index) => {
               const className = 'calendar__pocket calendar__pocket--' + index;
               return (
                  <div key={index} className={className} onClick={() => open(item)}>
                     {!opened.includes(item) ? (
                        <img className="calendar__image" src={`${path}/images/Pocket_${item}.png`} alt={`Pocket ${item}`} />
                     ) : (
                        <img className="calendar__candle" src={`${path}/images/candle.svg`} alt={`Candle in pocket ${item}`} />
                     )}
                  </div>
               );
            })}
         </div>
      </div>
   );

};

export default App;
