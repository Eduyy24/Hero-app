import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from "react-router-dom";
import api from './api/api';
import Home from './pages/home';
import Loading from './pages/loading';
import { GeneralState, setPagesData } from './redux/slices/generalSlice';

function App() {
  const dispatch = useDispatch()
  const isFullData = useSelector((state: {general: GeneralState}) => state.general.isFullData)

  React.useEffect(() => {
    const startApp = async () => {
      const response = await api.getInitialJson();
      setTimeout(() => {
        dispatch(setPagesData(response))
      }, 3000)
    };

    startApp();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isFullData) return <Loading />;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:form" element={<Home />} />
    </Routes>
  );
}

export default App;
