// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { ThemeProvider } from './context/ThemeContext'
// import { BrowserRouter } from 'react-router-dom'
// import "./index.css";
// import App from "./App.jsx";

// createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <ThemeProvider>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </ThemeProvider>
//   </React.StrictMode>
// );
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from "react";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from './context/ThemeContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
)
