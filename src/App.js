import React from 'react';
import './style.css';
// import './HeadingComponent';

export default function App() {
  return (
    <div>
      {/* <h1 className="test">Hello StackBlitz!</h1> */}
      <Heading />
      <Title />
    <h2>{
number
      }</h2>  
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}

const number=1000;
// react element
const heading = <h1 className="test"></h1>;

// react component Heading
const Heading = () => {
  return <h1>Heading Functional Component</h1>;
};


const Title=()=>(
  <h1>this is title</h1>
)