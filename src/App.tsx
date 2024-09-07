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
import { CartProvider } from './context/cartContext'
import Profile from './pages/Profile'
import PrivateRoute from './components/PrivateRoute'


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
        <CartProvider>
          <BrowserRouter>

            <Routes>
              <Route path="/" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
            </Routes>


            <Routes>

              <Route
                path="/home"
                element={
                  <PrivateRoute>
                    <MainLayout>
                      <Products />
                    </MainLayout>
                  </PrivateRoute>
                }
              />
              <Route
                path="/cart"
                element={
                  <PrivateRoute>
                    <MainLayout>
                      <Cart />
                    </MainLayout>
                  </PrivateRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <PrivateRoute>
                    <MainLayout>
                      <Profile />
                    </MainLayout>
                  </PrivateRoute>
                }
              />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </ProductProvider>
    </AuthProvider>

  )
}

export default App
