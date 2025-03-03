"""
This module provides callback functions for the Streamlit autocomplete component.
"""
from typing import Optional, Union, Callable, Any

from .types import CallbackArgs, CallbackKwargs


def handle_callback(
        callback: Union[Callable[[str], Any], None],
        value: str,
        args: Optional[CallbackArgs] = None,
        kwargs: Optional[CallbackKwargs] = None
) -> None:
    """Helper function to call a callback with appropriate arguments"""
    if callback is None:
        return

    if args is not None and kwargs is not None:
        callback(value, *args, **kwargs)
    elif args is not None:
        callback(value, *args)
    elif kwargs is not None:
        callback(value, **kwargs)
    else:
        callback(value)
