import React from "react";

class CounterApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        };
    }
    increment = () => {
        console.log('increment')
        this.setState(prevState => ({ count: prevState.count + 1 }))

    }
    decrement = () => {
        this.setState(prev => ({ count: prev.count - 1 }))
    }

    render() {
        return (
            <div>
                <h1>Counter App</h1>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }
}

export default CounterApp;


// import React, { useState } from "react";

// function CounterApp() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     setCount(count - 1);
//   };

//   return (
//     <div>
//       <h1>Counter App</h1>
//       <p>Count: {count}</p>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   );
// }

// export default CounterApp;
