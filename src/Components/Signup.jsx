import React from 'react'

const Signup = () => {
   const [userDetails, setUserDetails] = useState({
        username: "",
        email: "",
        password: ""
   })
   const[users, setUsers] = useState([])

    const handleDetails= (e)=>{
    const name= e.target.name;
    const value= e.target.value;
    
    setUserDetails({...userDetails, [name]:value})
    console.log(userDetails)

}



  return (
    <div> Signup
        <input placeholder="Enter name" type="text" whenItype={handleDetails} name="username" />
        <input placeholder="Enter email" type="text" whenItype={handleDetails} name="email" />
        <input placeholder="Enter password" type="text" whenItype={handleDetails} name="password" />
    </div>
  )
}


export default Signup



// import Submitform from './Components/Submitform.jsx';
// import { containerStyle, buttonStyle2 } from "./Components/styles.jsx";

// const App = () =>{
//   return(
//     <div style={containerStyle}>
//         <h1> Submit form</h1>
//         <Submitform type="text"  placeholder="Enter your FirstName" />
//         <Submitform type="text"  placeholder="Enter your LastName" />
//         <Submitform type="email" placeholder="Enter your email" />
//         <Submitform type="password" placeholder="Enter your password" />
      
//       <button style={buttonStyle2}>Submit</button>
        

//     </div>
//   );
// };

// export default App;
