import React from 'react';
import ReactDOM from 'react-dom';
import { Autocomplete } from '../components/Autocomplete';
import { initMockStreamlit } from './mockStreamlit';

// Initialize mock Streamlit
initMockStreamlit();

// Sample suggestions data
const mockSuggestions = {
  '#': ['react', 'typescript', 'javascript', 'python', 'streamlit'],
  '@': ['user1', 'user2', 'admin', 'guest', 'moderator'],
  '/': ['help', 'start', 'stop', 'restart', 'update', 'delete'],
};

// Mock props for development
const mockProps = {
  args: {
    label: 'Test Autocomplete',
    value: '',
    trigger_chars: ['#', '@', '/'],
    suggestions: mockSuggestions,
    placeholder: 'Type # or @ or / to trigger suggestions',
    disabled: false,
    label_visibility: 'visible',
    on_submit: true,
    position: 'static',
    width: '100%',
    dropdown_direction: 'down',
    tag_styles: {
      '#': { backgroundColor: '#e6f7ff', color: '#0066cc' },
      '@': { backgroundColor: '#f6ffed', color: '#52c41a' },
      '/': { backgroundColor: '#fff1f0', color: '#cf1322' },
    },
  },
  disabled: false,
  theme: {
    base: 'light',
    primaryColor: '#ff4b4b',
    backgroundColor: '#ffffff',
    secondaryBackgroundColor: '#f0f2f6',
    textColor: '#31333F',
    font: 'sans-serif',
  },
  width: 0, // Will be overridden by the component's width
  height: 0, // Will be adjusted by setFrameHeight
};

// Root component for development
const DevRoot = () => {
  return (
    <div
      style={{
        margin: '40px auto',
        maxWidth: '800px',
        padding: '20px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        backgroundColor: '#fff',
      }}
    >
      <h1
        style={{
          marginBottom: '20px',
          color: '#333',
          fontSize: '24px',
        }}
      >
        Autocomplete Component Dev Environment
      </h1>
      <div style={{ marginBottom: '10px' }}>
        Try typing <code>#</code>, <code>@</code>, or <code>/</code> followed by text to see
        suggestions.
      </div>
      <Autocomplete {...mockProps} />

      <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
        <p>Open your browser console to see component interactions (values, submissions, etc.)</p>
      </div>
    </div>
  );
};

// Render the component
ReactDOM.render(<DevRoot />, document.getElementById('root'));
