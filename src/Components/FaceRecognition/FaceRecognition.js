import React from 'react';
import './FaceRecognition.css';
const FaceRecognition=({imageUrl,Boxes})=>{
    return(
        <div className="center ma">
            <div className='absolute mt2'>
                <img src={imageUrl} id='inputimage' alt="" style={{width:'500px',height:'auto' }}/>
                {
                    Boxes.map(Box=>{
                       return <div key ={Box.topRow} className='bounding-box' style={{top:Box.topRow ,right:Box.rightCol,bottom:Box.bottomRow, left:Box.leftCol }}></div>
                    })
                }
            </div>
        </div>
    );
}
export default FaceRecognition;