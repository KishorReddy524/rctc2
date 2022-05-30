import { Page2 } from "./RegisterPageTwo";
import {
   
    Link
  } from "react-router-dom";
export const Page1 = () => {
    //  use reqres to log user in.
   

    const handelPage= ()=>{
return 
    }
    return (
      <form className="Page1form">
        <input
          name="username"
          type="text"
          placeholder="Enter username"
          className="Page1_username"
        />
        <input
          name="useremail"
          type="text"
          placeholder="Enter useremail"
          className="Page1_useremail"
        />
       <Link to ="./page2"> <input type="submit" value="NEXT"  className="Page1_submit" /></Link>
      </form>
    );
  };