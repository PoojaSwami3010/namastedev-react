import React from "react"

class UserClass extends React.Component{

    constructor(props){
        super(props);
        // this is how we create state varibale inside classbase component
      this.state={
        userInfo:{
            name:'Dummy',
            location:"Deafult",
            avatar_url:'dummy-photo'
        }
      }
//  console.log(this.props.name + "Child Constructor")
    }

async componentDidMount(){
    // even if we change link thenk also setinterval will call
//     this.timer =setInterval(()=>{
// console.log("namste react op")
//     },1000)
    // console.log(this.props.name +"Child Component did mount")

    // Api call make here 


    // const data=await fetch("https://api.github.com/users/pooja");
    // const json=await data.json();
    // this.setState({userInfo:json})
    // console.log("data",json)
}

componentDidUpdate(prevProps,prevState){
    if(this.state.count!=prevState.count){
        console.log("do something")
    }
    // console.log("Component did Mount")
}

componentWillUnmount(){
    // console.log("Component will unmount")
    // clearInterval(this.timer)
}

    render(){

        // const {name,location}=this.props;
        const {name,location,avatar_url}=this.state.userInfo
        

        // console.log(this.props.name +"Child Render")

        return <div className="user-card">        
           <img src={avatar_url} width={70} height={70}></img>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @Pooja</h4>
        
    </div>
    }
}

export default UserClass;




/**
 * --------Mounting Lifecycles---------------
 * constructor(dummy data)
 * Render(dummy data)
 * 
 * <html dymmyData>
 * 
 * ComponentDidMount
 * 
 *      api call
 *      this.setstate ---state variable is updated
 * 
 * --------UPDATE Cycle ---------------------------------------
 *          render (api data)
 * 
 *          < html new api data will load>
 * 
 * ComponentDidUpdate
 */