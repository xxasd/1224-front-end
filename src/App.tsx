import React from 'react'
import Router from './router'
import { Theme } from './store/theme'
import './App.css'

const App: React.FC = () => {
  return (
    <Theme>
      <Router />
    </Theme>
  );
}

export default App;
