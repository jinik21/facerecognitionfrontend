import React, { Component } from 'react';



class SignUp extends Component{
    constructor(props){
        super(props);
        this.state={
            signUpName:'',
            signUpEmail:'',
            signUpPassword:'',
            validpass:true
         }
        }
         onNameChange=(event)=>{
            this.setState({signUpName:event.target.value})
        }

        onEmailChange=(event)=>{
            this.setState({signUpEmail:event.target.value})
        }
        onPasswordChange=(event)=>{
            this.setState({signUpPassword:event.target.value})
        }
        onSubmitSignUp=()=>{
            if(this.state.signUpPassword.length>=8){
            this.setState({validpass:true});
            fetch('https://fierce-lake-11096.herokuapp.com/signup',{
                method:'post',
                headers:{'Content-type':'application/json'},
                body:JSON.stringify({
                    name:this.state.signUpName,
                    email:this.state.signUpEmail,
                    password:this.state.signUpPassword,
                })
            })
                .then(response=>response.json())
                .then(user=>{
                    if(user.id){
                        this.props.loadUser(user);
                        this.props.onRouteChange('home');
                        this.setState({validpass:true});
                    }
                })
            }
            else{
                this.setState({validpass:false});
            }
        
    }

    render(){

        const { onRouteChange }=this.props;
        if(this.state.validpass){
        return(
            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5">
                <main className="pa4 black-80">
                    <div className="measure" >
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Sign Up</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                <input 
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="text" 
                                    name="name"  
                                    id="name" 
                                    onChange={this.onNameChange}
                                />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input 
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="email" 
                                    name="email-address"  
                                    id="email-address"
                                    onChange={this.onEmailChange} 
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input 
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="password" 
                                    name="password"  
                                    id="password"
                                    onChange={this.onPasswordChange} 
                                />
                            </div>
                        </fieldset>
                        <div className="">
                            <input 
                            onClick={this.onSubmitSignUp}
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type="submit"
                            value="Sign Up" />
                        </div>
                        <div className="lh-copy mt3">
                            <p onClick={()=>onRouteChange('SignIn')}
                            className="f6 link dim black db pointer">Sign In</p>
                        </div>
                    </div>
                </main>
            </article>
            );
        }
        else{
            return(
                <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5">
                    <main className="pa4 black-80">
                        <div className="measure" >
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                <legend className="f1 fw6 ph0 mh0">Sign Up</legend>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                    <input 
                                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                        type="text" 
                                        name="name"  
                                        id="name" 
                                        onChange={this.onNameChange}
                                    />
                                </div>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                    <input 
                                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                        type="email" 
                                        name="email-address"  
                                        id="email-address"
                                        onChange={this.onEmailChange} 
                                    />
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                    <input 
                                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                        type="password" 
                                        name="password"  
                                        id="password"
                                        onChange={this.onPasswordChange} 
                                    />
                                </div>
                                <div className="lh-copy mt3">
                                <p className="f6 link white bg-dark-red b db  ba b--dark-red">Password should be<br></br> minimum 8 characters</p>
                                </div>
                            </fieldset>
                            <div className="">
                                <input 
                                onClick={this.onSubmitSignUp}
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                                type="submit"
                                value="Sign Up" />
                            </div>
                            <div className="lh-copy mt3">
                                <p onClick={()=>onRouteChange('SignIn')}
                                className="f6 link dim black db pointer">Sign In</p>
                            </div>
                        </div>
                    </main>
                </article>
                );
        }
    }
}

export default SignUp;