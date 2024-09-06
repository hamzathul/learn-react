import './App.css'
import Header from './components/Header'

function App() {
  const data = 'what are you doing?'
  return (
    <div>
      <Header data = {data}/>
      <h1 className='hello'>Hello world</h1>
      {/* <p>This is sample {data}</p> */}
    </div>
  );
}

function Hello(){
  return(<h1 className='hello'>Hello World</h1>)
}

export default App;
