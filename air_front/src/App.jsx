import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Alert from './component/alert/Alert';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route path="/alert" element={<Alert/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;