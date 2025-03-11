import { ComponentProps } from 'streamlit-component-lib';
import { RefObject } from 'react';

export interface AutocompleteProps extends ComponentProps {
  args: {
    label: string;
    value: string;
    trigger_chars: string[];
    suggestions: Record<string, string[]>;
    placeholder: string;
    disabled: boolean;
    label_visibility: string;
    on_submit: boolean;
    position: string; // 'static', 'bottom', or 'inline'
    width: string; // CSS width value like '100%', '300px', etc.
    dropdown_direction: string; // 'up' or 'down' to control where suggestions appear
    tag_styles?: Record<string, { backgroundColor?: string; color?: string }>; // Styles for each trigger character
  };
}

export interface SuggestionItemProps {
  suggestion: string;
  isActive: boolean;
  onClick: (suggestion: string) => void;
  onMouseEnter: () => void;
  isLast: boolean;
  index: number;
  searchQuery?: string;
}

export interface SuggestionsListProps {
  suggestions: string[];
  selectedIndex: number;
  onSelect: (suggestion: string) => void;
  onHover: (index: number) => void;
  searchQuery?: string;
}

export interface TriggerInfo {
  triggerChar: string | null;
  triggerPos: number;
  textAfterTrigger: string;
}

export interface DropdownPortalProps {
  showSuggestions: boolean;
  suggestionsRef: RefObject<HTMLDivElement>;
  inputRef: RefObject<HTMLInputElement>;
  dropdownDirection: string;
  position: { top: string; left: string; width: string };
  activeSuggestions: string[];
  selectedSuggestionIndex: number;
  onSelect: (suggestion: string) => void;
  onHover: (index: number) => void;
  searchQuery?: string;
}
