import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyJumbotron from './component/Welcome';
import MyNav from './component/MyNav';
import MyFooter from './component/MyFooter';
import BookCard from './component/Allthebooks';
import {Container} from 'react-bootstrap'

function App() {
  return (
    <Container>
        <MyNav/>
        <MyJumbotron/>
        <BookCard/>
        <MyFooter/>
     </Container>
    
  );
}

export default App;
