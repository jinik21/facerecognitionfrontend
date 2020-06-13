import React from 'react';



const Rank=({name,entries}) =>{
    return(
        <div>
            <div className='white f2'>
                {`${name},Your Current Entry Count Is...`}
            </div>
            <div className='white f1'>
                {`${entries}`}
            </div>
        </div>
    );

    
}

export default Rank;