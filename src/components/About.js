
import React from 'react';
import User from './User'
import UserClass from './UserClass';
import UserContext from '../utils/UserContext';



class About extends React.Component{

    constructor(props){
        super(props);
        console.log("Parent Constructor")
    }


    componentDidMount(){
        // console.log("Parent componet did mount")
    }

    render(){
        // console.log("Parent render")
  
    return (
        <div>
            <h1>About Class Component</h1>
            <div>
                loggedIn User Using Context
                <UserContext.Consumer>
                    {(data)=>(<h1 className='font-bold'>{data.loggedInUser}</h1>)}
                </UserContext.Consumer>
            </div>
            <h2>this is React course Series</h2>
            <User name={'Pooja'}/>
            {/* <UserClass name={'Pooja1 From class component'} location={'Pune'}/> */}
            
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


/* flow of renders
-Parent constructor
-Parent Render
    -Pooja 1 Constructor
    -Pooja 1 render

    -Pooja 2 Constructor
    -Pooja 2 render

    
    -Pooja 1 componentDidMount
    -Pooja 2 componentDidMount
-Parent ComponentDidMount



*/

export default About;