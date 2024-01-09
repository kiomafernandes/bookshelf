import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Home from "./components/pages/Home"
import Books from './components/pages/Books'
import About from './components/pages/About'
import BookRegister from './components/pages/BookRegister'
import Book from './components/pages/Book'

import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Container from './components/layout/Container'

function App() {
  return (
    <Router>
        <Navbar />
          <Container customClass="min-height">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/bookregister' element={<BookRegister />} />
              <Route path='/books' element={<Books />} />
              <Route path='/book/:id' element={<Book />} />
              <Route path='/about' element={<About />} />
            </Routes>
          </Container>
        <Footer />
    </Router>
  );
}

export default App;
