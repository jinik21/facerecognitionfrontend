import React from 'react';
import './ImageLinkForm.css';
const ImageLinkForm=({onInputChange,onButtonSubmit}) =>{
    return(
        <div>
            <p className ='f3'>
                {'Hello Mate,I detect faces in your lovely pics! Go ahead and try me.'}
            </p>
            <div className='center'>
                <div className='form pa4 br3 shadow-5 center'>
                    <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange} />
                    <button className='f4 grow w-30 link ph3 pv2 dib white bg-purple' onClick={onButtonSubmit}>Detect</button>
                </div>
            </div>
        </div>
    );

    
}

export default ImageLinkForm;