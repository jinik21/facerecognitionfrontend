import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import SignIn from'./Components/SignIn/SignIn';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import SignUp from './Components/SignUp/SignUp';
import './App.css';


const intialstate={
  input:'',
  imageUrl:'',
  Box:{},
  route:'SignIn',
  isSignedIn:false,
  user:{
    id:'',
    name:'',
    email:'',
    entries:0,
    joined:''
  }
}

const particleOption={
  particles:{
    number:{
      value:39,
      density:{
        enable:true,
        value_area:600
      }
    },
    move:{
      speed:7,
    },
    shape:{
      stroke:{width:3,color:'#A9A9A9'},
      polygon:{nb_sides:5},
      image:{type:'circle'}
    }

  }
}

class App extends Component{
  constructor(){
    super();
    this.state=intialstate;
  }

  loadUser=(data)=>{
    this.setState({user:{
      id:data.id,
      name:data.name,
      email:data.email,
      entries:data.entries,
      joined:data.joined

    }})
  }  

  displayFaceBox=(box)=>{
    console.log(box);
    return({aox:box});
  }
  displayFacelst=(box)=>{
    this.setState({Box:box});
    console.log(this.state.Box);
  }
  calculateFaceLocation = (data)=>{
    const image = document.getElementById('inputimage');
    const width =Number(image.width);
    const height=Number(image.height);

    const Clarifaiface = data.outputs[0].data.regions;
    const lst=[];
    Clarifaiface.forEach((req,i)=>{
    const kc=req.region_info.bounding_box;
    const ab={};
    ab.leftCol=kc.left_col*width;
    ab.topRow=kc.top_row*height;
    ab.rightCol= width -(kc.right_col*width);
    ab.bottomRow=height-(kc.bottom_row*height);
    lst.push(this.displayFaceBox(ab));
    });
    return lst
  }

  onInputChange=(event)=>{
    this.setState({input:event.target.value});
  }

  onRouteChange = (Route) => {
    if(Route==='home'){
      this.setState({isSignedIn:true})
    }
    else{
      this.setState(intialstate)
    }
    this.setState({route:Route});
  }

  onButtonSubmit=()=>{
    this.setState({imageUrl:this.state.input});
    fetch('http://localhost:3000/imageUrl',{
            method:'post',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify({
            input:this.state.input,
          }) 
        })
      .then(response=>response.json())
      .then(response =>{
        if(response){
          fetch('http://localhost:3000/image',{
            method:'put',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify({
            id:this.state.user.id,
          }) 
        })
        .then(response=>response.json())
        .then(count =>{
          this.setState(Object.assign(this.state.user,{entries:count}))
        })
        .catch(console.log)
      }
        this.displayFacelst(this.calculateFaceLocation(response))
      })
      .catch(err=>console.log(err));
  }
  render(){
    const {isSignedIn,imageUrl,Box,route } = this.state;
    return (
      <div className="App">
        <Particles  className='particles' params={particleOption} />
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn}/>
        { route==='home'?
          <div>
              <Logo />
              <Rank name={this.state.user.name} entries={this.state.user.entries}/>
              <ImageLinkForm 
                onInputChange={this.onInputChange}
                onButtonSubmit={this.onButtonSubmit} />
              <FaceRecognition Boxlst={Box} imageUrl={imageUrl} />
          </div>:
          (
            route ==='SignIn'?
            <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>:
            <SignUp loadUser={this.loadUser} onRouteChange={this.onRouteChange}/> 
          )
        }
      </div>
    );
  }
}

export default App;