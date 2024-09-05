import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// const router = createBrowserRouter([
//   {
//     path: "/signup",
//     element: <SignUp />,
//   },
//   {
//     path: "/signin",
//     element: <SignIn />,
//   },
//   {
//     path: "/",
//     element: <App />,
//   },
// ]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
