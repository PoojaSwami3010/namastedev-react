
import React from 'react';
import User from './User'
import UserClass from './UserClass';



class About extends React.Component{

    constructor(props){
        super(props);
        console.log("Parent Constructor")
    }


    componentDidMount(){
        console.log("Parent componet did mount")
    }

    render(){
        console.log("Parent render")
  
    return (
        <div>
            <h1>About Class Component</h1>
            <h2>this is React course Series</h2>
            {/* <User name={'Pooja'}/> */}
            <UserClass name={'Pooja From class component'} location={'Pune'}/>
        </div>
    );
}
}

// const About=()=>{
//     return (

//         <div>
//             <h1>About</h1>
//             <h2>this is React course Series</h2>
//             {/* <User name={'Pooja'}/> */}
//             <UserClass name={'Pooja From class component'} location={'Pune'}/>
//         </div>
//     )
// }

export default About;