
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import MainContent from './Components/MainContent/MainContent';
import SideNav from './Components/Sidenav/Sidenav';

function App() {
  return (
    <div className="d-flex flex-column text-center vh-100 vw-100">
      <Header className="bg-success m-2 h-25"/>
      <div className="d-flex flex-row justify-content-center mx-2 h-50">
        <SideNav className="bg-secondary flex-fill me-2"/>
        <MainContent className="bg-info w-50"/>
        <SideNav className="bg-primary flex-fill"/>
      </div>
      <Footer className="bg-warning m-2 h-25"/>
    </div>
  );
}

export default App;
~