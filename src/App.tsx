import { MainRoutes } from './routes/MainRoutes';
import './App.css';

const App = () => {
  return (
    <div>
      <h1 className='title'>Galeria de fotos</h1>
      <p className='explicar'>Esse projeto foi criado com "ReactJS" e utiliza a biblioteca JSONPlaceholder (uma API fake para testes e estudos).</p>
      <hr />
      <MainRoutes />
    </div>
  );
}

export default App;