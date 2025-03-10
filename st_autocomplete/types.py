from typing import Any, Callable, Dict, List, Literal, Optional, Tuple

# Type definitions
SuggestionDict = Dict[str, List[str]]
CallbackArgs = Optional[Tuple[Any, ...]]
CallbackKwargs = Optional[Dict[str, Any]]
CallbackFunction = Optional[Callable[[str], None]]

# Other type definitions
LabelVisibility = Literal["visible", "hidden", "collapsed"]
Position = Literal["static", "bottom", "inline"]
DropdownDirection = Literal["up", "down"]
