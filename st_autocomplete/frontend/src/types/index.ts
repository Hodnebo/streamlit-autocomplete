import { ComponentProps } from "streamlit-component-lib";

export interface AutocompleteProps extends ComponentProps {
  args: {
    label: string;
    value: string;
    trigger_chars: string[];
    suggestions: Record<string, string[]>;
    debounce: number | null;
    placeholder: string;
    disabled: boolean;
    label_visibility: string;
    on_submit: boolean;
    position: string; // 'static', 'bottom', or 'inline'
    width: string; // CSS width value like '100%', '300px', etc.
    dropdown_direction: string; // 'up' or 'down' to control where suggestions appear
    update_on_change?: boolean; // Control whether to update Streamlit on every keystroke
    tag_styles?: Record<string, { backgroundColor?: string; color?: string; }>; // Styles for each trigger character
  }
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