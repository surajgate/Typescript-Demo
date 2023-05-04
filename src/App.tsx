import './App.css';
import Props from './Components/Props';
import Welcome from './Components/Welcome';

function App() {


const List = [
  {
    first: 'ABC',
    last: 'DEF'
  },
  {
    first: 'XYZ',
    last: 'MNO'
  }
] 

  return (
    <>
      <Welcome/>

      <Props names = {List} />
    </>
  );
}

export default App;
