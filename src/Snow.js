import React from 'react';

const Snow = () => {

   // Array of snow elements
   const snowElements = [];

   // Generate 200 snow elements
   for (let i = 0; i < 200; i++) {
      snowElements.push(<div className="snow" />);
   }

   // Render snow
   return snowElements;

};

export default Snow;
