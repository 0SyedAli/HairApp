import React, {useEffect} from 'react';
import StackRoutes from './routes/StackRoutes';
import {LogBox} from 'react-native';

const App = () => {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  return (
    <>
        <StackRoutes />
    </>
  );
};

export default App;
