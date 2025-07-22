import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import NotificationsPage from './component/notifications/NotificationsPage'  
import NotificationDetail from './component/notifications/NotificationDetail'
import NotificationWrite from './component/notifications/NotificationWrite'
import Dashboard from './component/Dashboard/Dashboard'
import Alert from './component/alert/Alert';
import SettingsPage from './component/settings/SettingsPage'
import SignUp from './component/Signup/singup';
import Login from './component/login/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route path="/alert" element={<Alert/>}/>

        <Route path="/login" element={<Login />} />

        </Route>
        <Route path="/" element={<Layout />} >
        <Route path="/signup" element={<SignUp />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/notifications/:id" element={<NotificationDetail />} />
        <Route path="notifications/new" element={<NotificationWrite />} />
        <Route path="dash" element={<Dashboard />} />
        <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;