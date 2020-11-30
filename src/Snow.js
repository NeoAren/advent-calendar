import React from 'react';

const Snow = () => {

   // Array of snow elements
   const snowElements = [];

   // Generate 200 snow elements
   for (let i = 0; i < 200; i++) {
      snowElements.push(<div key={i} className="snow" />);
   }

   // Render snow
   return (
      <div className="snow-container">
         {snowElements}
      </div>
   );

};

export default Snow;
