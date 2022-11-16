import './App.css'
import { Helmet } from 'react-helmet-async';


function App() {
  const componentName = "Home";
  return (
    <div>
      <Helmet>
        <title>{componentName}</title>
      </Helmet>
      <h1>Home</h1>
      <nav>
          <ul>
            <li>
              <a href={`/`}>Home</a>
            </li>
            <li>
              <a href={`page1`}>Page1</a>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default App
