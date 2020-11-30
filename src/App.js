import React from 'react';
import Snow from './Snow';

const App = () => {

   const calendar_items = [
      1, 2, 3, 4, 5,
      6, 7, 8, 9, 10,
      11, 12, 'x', 13, 14,
      15, 16, 17, 18, 19,
      20, 21, 22, 23, 24
   ];

   const path = process.env.PUBLIC_URL;

   // Photo by form PxHere https://pxhere.com/en/photo/94605 https://pxhere.com/en/photo/1374018

   return (
      <div className="container">
         <Snow />
         <img className="background" src={`${path}/images/background.jpg`} alt="Photo by form PxHere" />
         <div className="calendar">
            {calendar_items.map(item => {
               let className = 'calendar__pocket calendar__pocket--' + item;
               return (
                  <div key={item} className={"calendar__pocket " + className}>
                     <img src={`${path}/images/Pocket_${item}.png`} alt={`Pocket ${item}`} />
                  </div>
               );
            })}
         </div>
      </div>
   );

};

export default App;
