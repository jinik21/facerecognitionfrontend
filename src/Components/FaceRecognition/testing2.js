import React from 'react';

import './FaceRecognition.css';
const FaceRecognition=({imageUrl,Boxlst})=>{
    const kc='</div></div>';
    const url={imageUrl}
    console.log(url.imageUrl)
    let myhtml='<div className="center ma"><div className=\'absolute mt2\'><img src=\''+url.imageUrl+'\'id=\'inputimage\' alt="" style={{width:\'500px\',height:\'auto\' }}/>';
    const p=Boxlst.forEach((req)=>{
        const ab=req.Box;
        const topRow=ab.topRow;
        const rightCol=ab.rightCol;
        const leftCol=ab.leftColtCol;
        const bottomRow=ab.bottomRow;
        myhtml+='<div className=\'bounding-box\' style={{top:'+topRow+' ,right:'+rightCol+',bottom:'+bottomRow+', left:'+leftCol+' }}></div>'});
    myhtml+=kc;   
    console.log(Boxlst);
    console.log(myhtml);
    return(
        <div className="content" dangerouslySetInnerHTML={{__html: myhtml}}></div>
    );
}
export default FaceRecognition;