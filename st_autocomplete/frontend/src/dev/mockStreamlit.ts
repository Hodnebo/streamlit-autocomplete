/**
 * Mock implementation of Streamlit functions for development environment
 */

// Create a mock of the Streamlit object
const Streamlit = {
  // Component communication
  setComponentValue: (value: any) => {
    console.log('Component value set to:', value);
    return true;
  },

  // Component ready signaling
  setComponentReady: () => {
    console.log('Component ready');
  },

  // Frame height manipulation
  setFrameHeight: (height?: number) => {
    console.log('Frame height set to:', height || 'auto');
  },

  // Args manipulation
  setIFrameHeight: (height: number) => {
    console.log('iFrame height set to:', height);
  },

  // Receive data from Streamlit
  receiveMessage: (data: any) => {
    console.log('Received message from Streamlit:', data);
  },
};

// Function to initialize mock Streamlit on window
export function initMockStreamlit() {
  (window as any).Streamlit = Streamlit;

  // Log when mock is initialized
  console.log('Mock Streamlit initialized for development');

  return Streamlit;
}

export default Streamlit;
