/**
 * Utility functions for DOM manipulation
 */

/**
 * Creates a portal container in the document for rendering dropdowns
 */
export const getPortalContainer = () => {
  let targetDocument = document;
  try {
    if (window.parent && window.parent.document) {
      targetDocument = window.parent.document;
    }
  } catch (e) {
    console.error('Cannot access parent document:', e);
  }
  
  let portalContainer = targetDocument.getElementById('suggestions-portal');
  if (!portalContainer) {
    portalContainer = targetDocument.createElement('div');
    portalContainer.id = 'suggestions-portal';
    targetDocument.body.appendChild(portalContainer);
  }
  return portalContainer;
};

/**
 * Injects global styles into the document head
 */
export const injectGlobalStyles = (position: string = 'static') => {
  // Create a style element for global styles
  const styleElement = document.createElement('style');
  styleElement.innerHTML = `
    /* Basic styling for iframe and component visibility */
    iframe.stCustomComponentV1 {
      min-height: 60px !important;
      overflow: visible !important;
    }
    
    /* Ensure suggestions are visible */
    .suggestions-dropdown {
      z-index: 9999 !important;
      position: absolute !important;
      background-color: white !important;
      border: 1px solid #ccc !important;
      border-radius: 4px !important;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2) !important;
      max-height: 300px !important;
      overflow-y: auto !important;
      width: 100% !important;
      pointer-events: auto !important;
    }
    
    /* Special handling for upward dropdowns */
    .suggestions-dropdown[data-direction="up"] {
      z-index: 10000 !important;
      transform: translateY(-2px) !important;
    }
    
    /* Fix for Streamlit iframe rendering */
    .element-container iframe {
      overflow: visible !important;
    }
    
    /* Allow overflow for dropdowns */
    .stApp {
      overflow: visible !important;
    }
    
    /* Global portal container */
    #suggestions-portal {
      position: fixed;
      z-index: 99999;
      pointer-events: none;
    }
    
    /* Portal dropdown needs pointer events */
    #suggestions-portal > div {
      pointer-events: auto;
    }
  `;
  
  // Add position-specific styles
  if (position === 'bottom') {
    styleElement.innerHTML += `
      body { padding-bottom: 70px !important; }
      footer { display: none !important; }
    `;
  }
  
  document.head.appendChild(styleElement);
  
  return styleElement;
};

/**
 * Injects script to fix iframe visibility issues
 */
export const injectIframeFixScript = () => {
  const script = document.createElement('script');
  script.innerHTML = `
    try {
      if (window.parent && window.parent.document) {
        const iframes = window.parent.document.querySelectorAll('iframe.stCustomComponentV1');
        iframes.forEach(iframe => {
          iframe.style.overflow = 'visible';
          if (iframe.height === '0') iframe.height = '60';
        });
      }
    } catch (e) { console.error('Error modifying parent iframe:', e); }
  `;
  document.body.appendChild(script);
  
  return script;
}; 