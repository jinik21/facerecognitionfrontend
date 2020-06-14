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
  Boxes:[],
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
  calculateFaceLocations = (data)=>{
    return data.outputs[0].data.regions.map(face=>{
      const Clarifaiface=face.region_info.bounding_box;
      const image = document.getElementById('inputimage');
      const width =Number(image.width);
      const height=Number(image.height);
      return{
        leftCol:Clarifaiface.left_col*width,
        topRow:Clarifaiface.top_row*height,
        rightCol: width -(Clarifaiface.right_col*width),
        bottomRow:height-(Clarifaiface.bottom_row*height)
      } 

    });
  }
  displayFaceBoxes=(Boxes)=>{
    this.setState({Boxes:Boxes});
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
    fetch('https://fierce-lake-11096.herokuapp.com/imageUrl',{
            method:'post',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify({
            input:this.state.input,
          }) 
        })
      .then(response=>response.json())
      .then(response =>{
        if(response){
          fetch('https://fierce-lake-11096.herokuapp.com/image',{
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
        this.displayFaceBoxes(this.calculateFaceLocations(response))
      })
      .catch(err=>console.log(err));
  }
  render(){
    const {isSignedIn,imageUrl,Boxes,route } = this.state;
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
              <FaceRecognition Boxes={Boxes} imageUrl={imageUrl} />
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
