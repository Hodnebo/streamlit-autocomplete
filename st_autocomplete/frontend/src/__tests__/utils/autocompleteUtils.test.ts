import { 
  findTriggerInfo, 
  formatSuggestionForInsertion, 
  calculateCursorPosition,
  filterSuggestions,
  filterSuggestionsBasedOnQuery,
  ZERO_WIDTH_SPACE
} from '../../utils/autocompleteUtils';

describe('findTriggerInfo', () => {
  test('returns default result when input is empty', () => {
    const result = findTriggerInfo('', 0, ['@', '#']);
    expect(result).toEqual({
      triggerChar: null,
      triggerPos: -1,
      textAfterTrigger: ''
    });
  });

  test('finds trigger character at the beginning of input', () => {
    const result = findTriggerInfo('@test', 5, ['@', '#']);
    expect(result).toEqual({
      triggerChar: '@',
      triggerPos: 0,
      textAfterTrigger: 'test'
    });
  });

  test('finds trigger character after space', () => {
    const result = findTriggerInfo('Hello @world', 12, ['@', '#']);
    expect(result).toEqual({
      triggerChar: '@',
      triggerPos: 6,
      textAfterTrigger: 'world'
    });
  });

  test('finds trigger character after newline', () => {
    const result = findTriggerInfo('Hello\n@world', 12, ['@', '#']);
    expect(result).toEqual({
      triggerChar: '@',
      triggerPos: 6,
      textAfterTrigger: 'world'
    });
  });

  test('ignores trigger character in the middle of a word', () => {
    const result = findTriggerInfo('email@example.com', 16, ['@', '#']);
    expect(result).toEqual({
      triggerChar: null,
      triggerPos: -1,
      textAfterTrigger: ''
    });
  });

  test('finds the closest trigger character to cursor', () => {
    const result = findTriggerInfo('Hello @world #tag', 12, ['@', '#']);
    expect(result).toEqual({
      triggerChar: '@',
      triggerPos: 6,
      textAfterTrigger: 'world'
    });
  });

  test('handles zero-width space correctly', () => {
    const result = findTriggerInfo(`Hello @world${ZERO_WIDTH_SPACE} #tag`, 19, ['@', '#']);
    expect(result).toEqual({
      triggerChar: '#',
      triggerPos: 14,
      textAfterTrigger: 'tag'
    });
  });
});

describe('formatSuggestionForInsertion', () => {
  test('appends zero-width space to suggestion', () => {
    const result = formatSuggestionForInsertion('test');
    expect(result).toBe(`test${ZERO_WIDTH_SPACE}`);
  });
});

describe('calculateCursorPosition', () => {
  test('calculates correct cursor position after insertion', () => {
    const result = calculateCursorPosition(5, '@', 'test');
    // Position = triggerStartPosition + trigger.length + suggestion.length + 2
    // 5 + 1 + 4 + 2 = 12
    expect(result).toBe(12);
  });
});

describe('filterSuggestions', () => {
  const suggestions = ['apple', 'banana', 'application', 'orange', 'apply'];
  
  test('returns all suggestions when query is empty', () => {
    const result = filterSuggestions(suggestions, '');
    expect(result).toEqual(suggestions);
  });

  test('finds exact matches with highest priority', () => {
    const result = filterSuggestions(suggestions, 'apple');
    expect(result[0]).toBe('apple');
  });

  test('finds suggestions that start with query', () => {
    const result = filterSuggestions(suggestions, 'app');
    expect(result).toContain('apple');
    expect(result).toContain('application');
    expect(result).toContain('apply');
    // Check that 'apple' comes before 'application' (shorter match first)
    expect(result.indexOf('apple')).toBeLessThan(result.indexOf('application'));
  });

  test('finds suggestions that contain query', () => {
    const result = filterSuggestions(suggestions, 'an');
    expect(result).toContain('banana');
    expect(result).toContain('orange');
  });

  test('returns empty array when no matches found', () => {
    const result = filterSuggestions(suggestions, 'xyz');
    expect(result).toEqual([]);
  });

  test('is case insensitive', () => {
    const result = filterSuggestions(suggestions, 'APPle');
    expect(result[0]).toBe('apple');
  });
});

describe('filterSuggestionsBasedOnQuery', () => {
  const suggestions = [
    'React', 
    'React Native', 
    'Redux', 
    'JavaScript', 
    'TypeScript',
    'Node.js'
  ];
  
  test('returns all suggestions when query is empty', () => {
    const result = filterSuggestionsBasedOnQuery(suggestions, '');
    expect(result).toEqual(suggestions);
  });

  test('finds exact matches with highest priority', () => {
    const result = filterSuggestionsBasedOnQuery(suggestions, 'React');
    expect(result[0]).toBe('React');
  });

  test('finds suggestions that start with query (with spaces)', () => {
    const result = filterSuggestionsBasedOnQuery(suggestions, 'React');
    expect(result).toContain('React');
    expect(result).toContain('React Native');
    // Check that 'React' comes before 'React Native'
    expect(result.indexOf('React')).toBeLessThan(result.indexOf('React Native'));
  });

  test('finds suggestions with normalized matching (ignoring spaces)', () => {
    const result = filterSuggestionsBasedOnQuery(suggestions, 'reactna');
    expect(result).toContain('React Native');
  });

  test('finds suggestions with word-by-word matching', () => {
    const result = filterSuggestionsBasedOnQuery(suggestions, 'script');
    expect(result).toContain('JavaScript');
    expect(result).toContain('TypeScript');
  });

  test('returns empty array when no matches found', () => {
    const result = filterSuggestionsBasedOnQuery(suggestions, 'python');
    expect(result).toEqual([]);
  });

  test('is case insensitive', () => {
    const result = filterSuggestionsBasedOnQuery(suggestions, 'javascript');
    expect(result).toContain('JavaScript');
  });
}); 