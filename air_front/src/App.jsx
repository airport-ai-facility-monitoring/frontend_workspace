import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import NotificationsPage from './components/notifications/NotificationsPage'  
import NotificationDetail from './components/notifications/NotificationDetail'
import NotificationWrite from './components/notifications/NotificationWrite'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/notifications/:id" element={<NotificationDetail />} />
        <Route path="notifications/new" element={<NotificationWrite />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;