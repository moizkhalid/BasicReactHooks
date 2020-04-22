import React from 'react';
import './App.css';
// import DocTitleOne from './component/DocTitleOne';
// import DocTitleTwo from './component/DocTitleTwo';
import CounterOne from './component/CounterOne';
import CounterTwo from './component/CounterTwo';
import UserForm from './component/UserForm';
import ParentClass from './component/ParentClass';
// import ClassTimer from './component/ClassTimer';
// import HookTimer from './component/HookTimer';
// import FocusUseRef from './component/FocusUseRef';
// import DataFetchingUseState from './component/DataFetchingUseState';
// import DataFetchingUseReducer from './component/DataFetchingUseReducer';
// import ParentCompUseCallBack from './component/ParentCompUseCallBack';
// import UseMemoCounter from './component/UseMemoCounter';
// import ReducerContextCompA from './component/ReducerContextCompA';
// import ReducerContextCompB from './component/ReducerContextCompB';
// import ReducerContextCompC from './component/ReducerContextCompC';
// import UseReducerCounterOne from './component/UseReducerCounterOne';
// import UseReducerCounterTwo from './component/UseReducerCounterTwo';
// import UseReducerCounterThree from './component/UseReducerCounterThree';
// import ComponentA from './component/ComponentA';

// export const UserContext = createContext();
// export const ChannelContext = createContext();
// export const CountContext = React.createContext();
// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case 'increment':
//       return state + 1;

//     case 'decrement':
//       return state - 1;

//     case 'reset':
//       return initialState;

//     default:
//       return state;
//   }
// };
function App() {
  // const [count, dispatch] = useReducer(reducer, initialState);
  return (
    // <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
    <div className='App'>
      {/* <UserForm /> */}
      <ParentClass />
      {/* <CounterOne />
      <CounterTwo /> */}
      {/* <DocTitleOne /> */}
      {/* <DocTitleTwo /> */}
      {/* <ClassTimer /> */}
      {/* <HookTimer /> */}
      {/* <FocusUseRef /> */}
      {/* <ParentCompUseCallBack /> */}
      {/* <UseMemoCounter /> */}
      {/* <DataFetchingUseState /> */}

      {/* <DataFetchingUseReducer /> */}
      {/* count - {count}
        <ReducerContextCompA />
        <ReducerContextCompB />
        <ReducerContextCompC /> */}
      {/* <UseReducerCounterThree /> */}
      {/* <UseReducerCounterTwo /> */}
      {/* <UseReducerCounterOne /> */}
      {/* <UserContext.Provider value={'moiz'}>
        <ChannelContext.Provider value={'testing Company'}>
        <ComponentA />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
    </div>
    // </CountContext.Provider>
  );
}

export default App;
