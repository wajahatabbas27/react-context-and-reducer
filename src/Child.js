import { useContext } from "react";
import valueContext from "./valueContext";

function Child(props) {
  let value = useContext(valueContext);  
  console.log("value",value);
  let updateValue=value[1];
  return (
      <div>
          Child Number = {props.num+2};
          <br/>
          value = {value[0]};
          <br/>
          <button onClick={()=>{(updateValue)(++value)}}></button>
      </div>
    );
  }
  
  export default Child;