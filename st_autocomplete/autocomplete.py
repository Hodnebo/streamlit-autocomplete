from typing import Optional, List, Any, Dict, cast

from .callbacks import handle_callback
from .component import component_func
from .state import (
    init_session_state,
    is_submitted,
    set_submitted,
    get_processed_messages,
    add_processed_message
)
from .types import (
    SuggestionDict,
    CallbackFunction,
    CallbackArgs,
    CallbackKwargs,
    LabelVisibility,
    Position,
    DropdownDirection
)


def st_autocomplete(
        label: str,
        value: str = "",
        trigger_chars: List[str] = ["#", "@"],
        suggestions: SuggestionDict = {"#": [], "@": []},
        key: Optional[str] = None,
        debounce: Optional[int] = None,
        on_change: Optional[CallbackFunction] = None,
        on_submit: Optional[CallbackFunction] = None,
        args: Optional[CallbackArgs] = None,
        kwargs: Optional[CallbackKwargs] = None,
        *,
        placeholder: str = "",
        disabled: bool = False,
        label_visibility: LabelVisibility = "visible",
        position: Position = "static",
        width: str = "100%",
        dropdown_direction: DropdownDirection = "down",
        update_on_change: bool = False,
        tag_styles: Optional[Dict[str, Dict[str, str]]] = None,
) -> str:
    """
    Create an autocomplete text input component.

    Parameters
    ----------
    label : str
        A short label explaining to the user what this input is for.
    value : str
        The initial value of the text input.
    trigger_chars : List[str]
        Characters that trigger the suggestion dropdown.
    suggestions : Dict[str, List[str]]
        Dictionary mapping trigger characters to their suggestion lists.
    key : str or None
        An optional key that uniquely identifies this component. If this is
        None, and the component's arguments are changed, the component will
        be re-mounted in the Streamlit frontend and lose its current state.
    debounce : int or None
        The number of milliseconds to wait before triggering the on_change callback.
    on_change : callable or None
        An optional callback invoked when this text input's value changes.
    on_submit : callable or None
        An optional callback invoked when the user submits the input (presses Enter).
    args : tuple or None
        Optional tuple of args to pass to the callback.
    kwargs : dict or None
        Optional dict of kwargs to pass to the callback.
    placeholder : str
        An optional string displayed when the text input is empty.
    disabled : bool
        An optional boolean, which disables the text input if set to True.
    label_visibility : "visible" or "hidden" or "collapsed"
        The visibility of the label. If "hidden", the label doesn't show but there
        is still empty space for it (equivalent to label=""). If "collapsed",
        both the label and the space are removed.
    position : "static", "bottom", or "inline"
        The position of the input. "static" is the default behavior.
        "bottom" fixes the input to the bottom of the screen.
        "inline" keeps the input in the normal flow but allows width customization.
    width : str
        CSS width value (e.g., "100%", "300px"). Only applies when position is not "bottom".
    dropdown_direction : "up" or "down"
        Direction for the suggestions dropdown. "down" shows suggestions below the input (default),
        "up" shows suggestions above the input.
    update_on_change : bool
        Whether to update Streamlit on every keystroke (True) or only on submit/enter (False).
        Set to False to avoid interrupting streaming or long-running operations.
    tag_styles : Dict[str, Dict[str, str]] or None
        Optional dictionary to customize the appearance of tags for each trigger character.
        The keys should be trigger characters, and the values are dictionaries with
        'backgroundColor' and 'color' keys.
        Example: {"#": {"backgroundColor": "#e8f0fe", "color": "#1a73e8"},
                 "@": {"backgroundColor": "#f0f8ff", "color": "#0366d6"}}

    Returns
    -------
    str
        The current value of the text input widget.
    """
    # Initialize session state for this component
    init_session_state(key)
    
    # Get current input value - use empty string if previously submitted
    current_value = "" if is_submitted(key) else value
    
    # Reset submission flag
    set_submitted(key, False)
    
    # Set default tag styles if not provided
    if tag_styles is None:
        tag_styles = {
            "#": {"backgroundColor": "#e8f0fe", "color": "#1a73e8"},
            "@": {"backgroundColor": "#f0f8ff", "color": "#0366d6"}
        }
        
    # Call the component function
    component_value = component_func(
        label=label,
        value=current_value,
        trigger_chars=trigger_chars,
        suggestions=suggestions,
        key=key,
        debounce=debounce,
        placeholder=placeholder,
        disabled=disabled,
        label_visibility=label_visibility,
        position=position,
        width=width,
        dropdown_direction=dropdown_direction,
        update_on_change=update_on_change,
        on_submit=on_submit is not None,
        tag_styles=tag_styles,
        default=current_value,
    )
    
    # Process the component result
    submitted = False
    result_value = current_value
    
    if isinstance(component_value, dict):
        # Safely extract values from the dictionary with type casting
        component_dict = cast(Dict[str, Any], component_value)
        if "submitted" in component_dict:
            submitted = bool(component_dict["submitted"])
        if "value" in component_dict:
            result_value = str(component_dict["value"])
    elif component_value is not None:
        result_value = str(component_value)
    
    # Handle regular value changes (not submissions)
    if not submitted and result_value != current_value and on_change is not None:
        handle_callback(on_change, result_value, args, kwargs)
    
    # Handle submissions
    if submitted and result_value and result_value.strip():
        # Check if this message was already processed to avoid duplicates
        processed_messages = get_processed_messages(key)
        
        if result_value not in processed_messages:
            add_processed_message(result_value, key)
            
            set_submitted(key, True)
            
            if on_submit is not None:
                handle_callback(on_submit, result_value, args, kwargs)
            
            # Return empty string to clear the input
            return ""

    return result_value
