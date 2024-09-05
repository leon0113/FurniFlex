import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ProductListing from './components/ProductListing'
// import SignUp from './components/Signup'

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <ProductListing />
      </main>
      <Footer />
    </div>
  )
}

export default App
