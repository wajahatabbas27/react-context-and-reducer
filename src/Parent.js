const { default: Child } = require("./Child");

function Parent(props) {
    return (
      <div>
          Parent Number = {props.num + 1}
          <br/>
          <Child num={props.num}></Child>
      </div>
    );
  }
  
  export default Parent;