import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import NotificationsPage from './components/notifications/NotificationsPage'  
import NotificationDetail from './components/notifications/NotificationDetail'
import NotificationWrite from './components/notifications/NotificationWrite'
import Alert from './component/alert/Alert';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >

        <Route path="/alert" element={<Alert/>}/>

        </Route>
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/notifications/:id" element={<NotificationDetail />} />
        <Route path="notifications/new" element={<NotificationWrite />} />
      </Routes>
    </Router>
  );
}

export default App;