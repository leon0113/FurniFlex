import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignIn from './pages/SignIn'
import Products from './pages/Products'
import Cart from './pages/Cart'
import SignUp from './pages/Signup'
import { AuthProvider } from './context/userContext'
import { ProductProvider } from './context/productContext'


const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

function App() {

  return (
    <AuthProvider>
      <ProductProvider>
        <BrowserRouter>
          {/* Routes without Navbar and Footer (like SignUp and SignIn) */}
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>

          {/* Routes with Navbar and Footer */}
          <Routes>
            <Route
              path="/"
              element={
                <MainLayout>
                  <Products />
                </MainLayout>
              }
            />
            <Route
              path="/cart"
              element={
                <MainLayout>
                  <Cart />
                </MainLayout>
              }
            />
          </Routes>
        </BrowserRouter>
      </ProductProvider>
    </AuthProvider>
  )
}

export default App
