// Import React Tools
import ReactDOM from "react-dom/client";

// Import the App Component
import { App } from "./App";

// Targeted the Div Element with the Id "root"
const divRoot = document.getElementById("root");

// Our First Node of the Virtual DOM
const reactRoot = ReactDOM.createRoot(divRoot);

// Inject Our First Composant into the Root Node
reactRoot.render(<App />)    
