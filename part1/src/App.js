import './App.css';

 const Mensaje = (props) => {
   return <h1 style={{color: props.color}}>
     {props.msg}
     </h1>
 }

function App() {
  return (
    <div className="App">
    <Mensaje color='red' msg='estamos trabajando' />
    <Mensaje color='green'msg='en un curso'/>
    <Mensaje color='blue' msg='de react'/>
    </div>
  );
}

export default App;
