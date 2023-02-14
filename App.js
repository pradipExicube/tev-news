import React from 'react';
import { ThemeProvider } from './src/constants/ThemeContext';
import Navigator from './src/navigation/Navigator';

function App() {
  return (
    // <Navigator/>
    <ThemeProvider>
    <Navigator />
  </ThemeProvider>
  );
}

export default App;