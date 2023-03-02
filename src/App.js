
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <>
    
    <Header titulo="Galeria de imagenes con react" />
    <Card 
    titulo="Playa Mald"
    imagen="https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_1280.jpg" 
    descripcion='Maldivas'
    />

<Card 
    titulo="Playa Mald"
    imagen="https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_1280.jpg" 
    descripcion='Maldivas'
    />

<Card 
    titulo="Playa Mald"
    imagen="https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_1280.jpg" 
    descripcion='Maldivas'
    />
<button type="button" class="btn btn-success my-4 d-grid gap-2 col-2 mx-auto">mostrar mas imagenes</button>

<Footer />
    </>

    
  );
}

export default App;
