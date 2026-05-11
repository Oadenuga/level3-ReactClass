import React from 'react';

const Images = ({img, width, height}) => {
  return (
    <div >
        <img src={img} alt="my image" style={{"width": width, "height": height}}/>

    </div>
  )
}


export default Images;
