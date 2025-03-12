import React from 'react';
import ReactDOM from 'react-dom';
import { Streamlit, withStreamlitConnection } from 'streamlit-component-lib';
import { Autocomplete } from './components/Autocomplete';

// Check if we're in development mode
const isDevelopment = process.env.REACT_APP_DEV_MODE === 'true';

if (isDevelopment) {
  // In development mode, use the dev entry point
  import('./dev/index');
} else {
  // In production mode, use the Streamlit-connected component
  const AutocompleteWithConnection = withStreamlitConnection(Autocomplete);

  ReactDOM.render(
    <React.StrictMode>
      <AutocompleteWithConnection />
    </React.StrictMode>,
    document.getElementById('root')
  );

  Streamlit.setComponentReady();
}
