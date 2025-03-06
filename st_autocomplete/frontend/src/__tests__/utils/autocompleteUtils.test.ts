import {
    _matchWordByWord,
    calculateCursorPosition,
    filterSuggestions,
    findTriggerInfo,
    formatSuggestionForInsertion,
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
    const suggestions = [
        'React',
        'React Native',
        'Redux',
        'JavaScript',
        'TypeScript',
        'Node.js'
    ];

    test('returns all suggestions when query is empty', () => {
        const result = filterSuggestions(suggestions, '');
        expect(result).toEqual(suggestions);
    });

    test('finds exact matches with highest priority', () => {
        const result = filterSuggestions(suggestions, 'React');
        expect(result[0]).toBe('React');
    });

    test('finds suggestions that start with query (with spaces)', () => {
        const result = filterSuggestions(suggestions, 'React');
        expect(result).toContain('React');
        expect(result).toContain('React Native');
        // Check that 'React' comes before 'React Native'
        expect(result.indexOf('React')).toBeLessThan(result.indexOf('React Native'));
    });

    test('finds suggestions with normalized matching (ignoring spaces)', () => {
        const result = filterSuggestions(suggestions, 'reactna');
        expect(result).toContain('React Native');
    });

    test('finds suggestions with non-subsequent characters', () => {
        const result = filterSuggestions(suggestions, 'scrp');
        expect(result).toContain('JavaScript');
        expect(result).toContain('TypeScript');
    });

    test('finds suggestions with word-by-word matching', () => {
        const result = filterSuggestions(suggestions, 'script');
        expect(result).toContain('JavaScript');
        expect(result).toContain('TypeScript');
    });

    test('returns empty array when no matches found', () => {
        const result = filterSuggestions(suggestions, 'python');
        expect(result).toEqual([]);
    });

    test('is case insensitive', () => {
        const result = filterSuggestions(suggestions, 'javascript');
        expect(result).toContain('JavaScript');
    });
});
