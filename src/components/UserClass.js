import React from "react"

class UserClass extends React.Component{

    constructor(props){
        super(props);
        // tis is how we create state varibale inside classbase component
        this.state={
            count:0,
            count2:2
        }

    }

    render(){

        const {name,location}=this.props;
        const {count}=this.state;


        return <div className="user-card">
            <h1>Count: {count}</h1>
            <button onClick={()=>{
                // never updates state variables directly (this.state.count+=1)
                // use below method
                this.setState({
                      count:this.state.count+1,   
                })
            }}>Count Increases</button>
           
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @Pooja</h4>
    </div>
    }
}

export default UserClass;