import Zatec from './Zatec'
import Litvinov from './Litvinov'
import Most from './Most'
import Louny from './Louny'
import Podborany from './Podborany'
import './App.css';

const App = () => {


  return (
    <div className="App">
      
      <h1 class='header'>Weather</h1>

      <div class='container'>
        <Zatec />
        <Litvinov />
        <Most />
        <Louny />
        <Podborany />
      </div>

      


    </div>
  );
}


export default App;
