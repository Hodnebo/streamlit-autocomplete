// Constants
export const ZERO_WIDTH_SPACE = '\u200B';

/**
 * Finds trigger character, position, and text after trigger based on input value and cursor position
 */
export const findTriggerInfo = (value: string, cursorPosition: number, triggerChars: string[]) => {
  let result = {
    triggerChar: null as string | null,
    triggerPos: -1,
    textAfterTrigger: ""
  };

  if (!value || cursorPosition === 0 || !triggerChars || triggerChars.length === 0) {
    return result;
  }

  // Work backwards from cursor to find the most recent trigger character
  let closestTriggerPos = -1;
  let closestTriggerChar = null;

  for (let i = cursorPosition - 1; i >= 0; i--) {
    const char = value[i];
    
    // If we encounter a zero-width space, we've found a completed tag
    // We need to find the next trigger after this
    if (char === ZERO_WIDTH_SPACE) {
      // Skip past this completed tag and look for the next trigger
      continue;
    }
    
    // Check if this character is a trigger
    if (triggerChars.includes(char)) {
      // A trigger is valid if:
      // 1. It's at the beginning of input, or
      // 2. It's preceded by a space or newline
      const isValidTrigger = 
        i === 0 || 
        value[i - 1] === ' ' || 
        value[i - 1] === '\n';
      
      if (isValidTrigger) {
        closestTriggerPos = i;
        closestTriggerChar = char;
        break;
      }
    }
  }

  // If we found a trigger, extract the text between the trigger and cursor
  if (closestTriggerPos !== -1 && closestTriggerChar) {
    result.triggerChar = closestTriggerChar;
    result.triggerPos = closestTriggerPos;
    result.textAfterTrigger = value.substring(closestTriggerPos + 1, cursorPosition);
  }

  return result;
};

/**
 * Format a suggestion for insertion into the input with a zero-width space
 */
export const formatSuggestionForInsertion = (suggestion: string): string => {
  return suggestion + ZERO_WIDTH_SPACE;
};

/**
 * Calculate the cursor position after inserting a suggestion
 */
export const calculateCursorPosition = (
  triggerStartPosition: number, 
  trigger: string, 
  suggestion: string
): number => {
  // Position cursor after: trigger + suggestion + zero-width space + regular space
  return triggerStartPosition + trigger.length + suggestion.length + 2;
};


/**
 * Filters suggestions based on query text
 */
export const filterSuggestions = (
  availableSuggestions: string[], 
  query: string
): string[] => {
  // Normalize the query by converting to lowercase and removing spaces
  const lowerQuery = query.toLowerCase().trim();
  const normalizedQuery = lowerQuery.replace(/\s+/g, '');
  
  // If the query is empty, return all suggestions
  if (normalizedQuery === '') {
    return availableSuggestions;
  }
  
  const matches = availableSuggestions.map(suggestion => {
    // Preserve original suggestion for return value
    const original = suggestion;
    
    // Normalize the suggestion
    const lowerSuggestion = suggestion.toLowerCase();
    const normalizedSuggestion = lowerSuggestion.replace(/\s+/g, '');
    
    // Different matching strategies with scores (higher is better)
    let score = 0;
    
    // Exact match - highest priority
    if (lowerSuggestion === lowerQuery) {
      score = 100;
    }
    // Starts with query (with spaces) - high priority
    else if (lowerSuggestion.startsWith(lowerQuery)) {
      score = 80;
    }
    // Normalized suggestion starts with normalized query - medium-high priority
    else if (normalizedSuggestion.startsWith(normalizedQuery)) {
      score = 70;
    }
    // Contains exact query (with spaces) - medium priority
    else if (lowerSuggestion.includes(lowerQuery)) {
      score = 60;
    }
    // Normalized suggestion contains normalized query - medium-low priority
    else if (normalizedSuggestion.includes(normalizedQuery)) {
      score = 50;
    }
    // Word by word matching (match each word in query) - low priority
    else {
      const queryWords = lowerQuery.split(/\s+/);
      const suggestionWords = lowerSuggestion.split(/\s+/);
      
      // Count how many query words are in the suggestion
      const matchedWords = queryWords.filter(word => 
        suggestionWords.some(sugWord => sugWord.includes(word))
      ).length;
      
      if (matchedWords > 0) {
        // Score based on percentage of matched words
        score = 30 + (20 * (matchedWords / queryWords.length));
      }
      // No match on words, try character sequence matching for typos
      else {
        // Calculate longest common subsequence or similar metric
        // This is a simplified version
        let maxConsecutive = 0;
        
        for (let i = 0; i < normalizedSuggestion.length; i++) {
          let matched = 0;
          for (let j = 0; j < normalizedQuery.length && (i + j) < normalizedSuggestion.length; j++) {
            if (normalizedSuggestion[i + j] === normalizedQuery[j]) {
              matched++;
            } else {
              break;
            }
          }
          maxConsecutive = Math.max(maxConsecutive, matched);
        }
        
        if (maxConsecutive >= 2) { // At least 2 consecutive characters match
          score = 10 + (10 * (maxConsecutive / normalizedQuery.length));
        }
      }
    }
    
    return { suggestion: original, score };
  })
  .filter(item => item.score > 0) // Filter out non-matches
  .sort((a, b) => b.score - a.score); // Sort by score (highest first)
  
  // Return just the suggestions, without scores
  return matches.map(item => item.suggestion);
}; 