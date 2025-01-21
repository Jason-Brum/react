//components
import FirstComponent from './components/FirstComponent';
import TemplateExpression from './components/TemplateExpression';
import MeuComponente from './components/MeuComponente';
import Eventos from './components/Eventos';

//styles/css
import './App.css';
function App() {
  return (
    <div className="App">
     <h1>Teste Fundamentos com React</h1>
     <FirstComponent/>
     <TemplateExpression/>
     <MeuComponente />
     <Eventos />
    </div>
  );
}

export default App;
