import React from "react";
//import from library redux
import { connect } from "react-redux";
//import actions
import { increaseCounter, decreaseCounter } from "../redux/counter.actions";

function Counter(props) {
  // const [count, setCount] = useState(0);
  // const plus = ()=> {
  //   setCount(count +1)
  // }
  // const minus = ()=> {
  //   setCount(count -1)
  // }
  return (
    <div style={{ fontSize: "30px", textAlign: "center" }}>
      <p>Count: {props.count}</p>
      <button
        style={{ fontSize: "30px" }}
        onClick={() => props.increaseCounter()}
      >
        +
      </button>
      <button style={{ fontSize: "30px" }} 
      onClick={()=> props.decreaseCounter()}>
        -
      </button>
    </div>
  );
}

//adding state to props, access inside component count
const mapStateToProps = state => {
  return{
    count: state.counter.count,
  }
}
//adding actions to props, after access the count, now release actions
const mapDispatchToProps = dispatch => {
  return{
    increaseCounter: ()=> dispatch(increaseCounter()),
    decreaseCounter: ()=> dispatch(decreaseCounter()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// connection at the end
