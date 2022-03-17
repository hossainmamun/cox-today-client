import React from 'react';

const GalleryDisplay = ({img}) => {
    return (
        <div className='col'>
            <img src={img.imgUrl} className="img-fluid" alt="" style={{height: '420px', width: '629px'}} />
        </div>
    );
};

export default GalleryDisplay;