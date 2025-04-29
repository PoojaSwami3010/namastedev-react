import React from 'react';
import './style.css';
// import './HeadingComponent';

export default function App() {
  return (
    <div>
      {/* <h1 className="test">Hello StackBlitz!</h1> */}
      <Heading />
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}

// react element
const heading = <h1 className="heading"></h1>;

// react component Heading
const Heading = () => {
  return <h1>Heading Functional Component</h1>;
};


const title=()=>(
  <h1>this is title</h1>
)