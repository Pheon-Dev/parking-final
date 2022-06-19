import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import {useAppContext} from './AppContext';
// import Loader from './components/Loader';

const Auth = React.lazy(() => import('./pages/Auth'));
const Home = React.lazy(() => import('./pages/Home'));
const Profile = React.lazy(() => import('./pages/Profile'));
const Bookings = React.lazy(() => import('./pages/Bookings'));
const Presence = React.lazy(() => import('./components/Starting/Presence'));

function App() {
  const {isLoggedIn} = useAppContext();

  return (
    <Suspense fallback = {<Loader />}>
      <Routes>
          <Route path="/" exact element={<Home />} />

          {isLoggedIn &&
          <Route path="/auth" element={<Home />} />
          }
          {!isLoggedIn &&
          <Route path="/auth" element={<Auth />} />
          }

        {isLoggedIn && (
          <Route path="/profile" element={<Presence />} />
        )}

        {isLoggedIn && (
          <Route path="/boookings" element={<Bookings />} />
        )}

        {isLoggedIn && (
          <Route path="/profile/:placeId" element={<Profile />} />
        )}

          <Route path="/*" element={<Dashboard />} />
      </Routes>
    </Suspense>
  );
}

export default App;
