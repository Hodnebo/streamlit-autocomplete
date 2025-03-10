"""
This module provides utility functions for managing Streamlit session state
for the autocomplete component.
"""

from typing import Optional, Set

import streamlit as st


def get_state_key(component_key: Optional[str], suffix: str) -> str:
    """
    Create a unique session state key based on the component key and suffix.

    Parameters
    ----------
    component_key : str or None
        The unique key for the component instance
    suffix : str
        The suffix to append to the key

    Returns
    -------
    str
        A unique key for the session state
    """
    prefix = f"{component_key}_autocomplete" if component_key else "autocomplete"
    return f"{prefix}_{suffix}"


def init_session_state(component_key: Optional[str] = None) -> None:
    """
    Initialize session state for an autocomplete component.

    Parameters
    ----------
    component_key : str or None
        The unique key for the component instance
    """
    # Get state keys
    submitted_key = get_state_key(component_key, "submitted")
    processed_key = get_state_key(component_key, "processed")

    # Initialize state if not already present
    if submitted_key not in st.session_state:
        st.session_state[submitted_key] = False

    if processed_key not in st.session_state:
        st.session_state[processed_key] = set()


def get_processed_messages(component_key: Optional[str] = None) -> Set[str]:
    """
    Get the set of processed messages for a component.

    Parameters
    ----------
    component_key : str or None
        The unique key for the component instance

    Returns
    -------
    Set[str]
        Set of processed message IDs
    """
    processed_key = get_state_key(component_key, "processed")
    return st.session_state.get(processed_key, set())


def is_submitted(component_key: Optional[str] = None) -> bool:
    """
    Check if the component was submitted in the current render cycle.

    Parameters
    ----------
    component_key : str or None
        The unique key for the component instance

    Returns
    -------
    bool
        True if the component was submitted, False otherwise
    """
    submitted_key = get_state_key(component_key, "submitted")
    return st.session_state.get(submitted_key, False)


def set_submitted(component_key: Optional[str] = None, value: bool = True) -> None:
    """
    Set the submitted state for a component.

    Parameters
    ----------
    component_key : str or None
        The unique key for the component instance
    value : bool
        The value to set the submitted state to
    """
    submitted_key = get_state_key(component_key, "submitted")
    st.session_state[submitted_key] = value


def add_processed_message(message: str, component_key: Optional[str] = None) -> None:
    """
    Add a message to the set of processed messages.

    Parameters
    ----------
    message : str
        The message to add
    component_key : str or None
        The unique key for the component instance
    """
    processed_key = get_state_key(component_key, "processed")
    processed = get_processed_messages(component_key)
    processed.add(message)
    st.session_state[processed_key] = processed
