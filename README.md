# Streamlit Autocomplete Component

A customizable autocomplete/typeahead component for Streamlit with support for multiple trigger characters, colored tags, and streaming operations.

## Features

- **Multiple Trigger Characters**: Support for multiple different trigger characters (e.g., `#` for tags, `@` for mentions)
- **Colored Tags**: Highlight selected suggestions with custom colors directly in the input field
- **Streaming-Compatible**: Special mode to prevent interruptions during streaming operations
- **Customizable Styling**: Extensive styling options for the input field and tags
- **Rich Dropdown**: Dropdown suggestions appear in a portal to avoid z-index issues
- **Keyboard Navigation**: Full keyboard support for navigating suggestions

## Installation

### Development Installation

1. Clone this repository
2. Install the development dependencies:

```bash
cd streamlit-autocomplete/frontend
npm install
```

3. Build the frontend:

```bash
npm run build
```

4. Install the component in development mode:

```bash
pip install -e .
```

The package uses modern Python packaging with `pyproject.toml` for configuration.

### Production Installation

Once the package is published to PyPI, you can install it with:

```bash
pip install streamlit-autocomplete
```

## Basic Usage

```python
import streamlit as st
from st_autocomplete import st_autocomplete

# Define your suggestions
tags = ["feature", "bug", "documentation", "enhancement"]
mentions = ["user1", "user2", "admin", "support"]

# Create a dictionary mapping trigger characters to suggestion lists
suggestions = {
    "#": tags,
    "@": mentions
}

# Use the component
value = st_autocomplete(
    label="Enter your message",
    value="",
    trigger_chars=["#", "@"],
    suggestions=suggestions,
    key="my_input",
    placeholder="Type # for tags or @ for mentions"
)

# Show the current value
if value:
    st.write("You entered:", value)
```

## Colored Tags

The component can display selected tags with custom colors:

```python
# Define custom colors for each trigger character
tag_styles = {
    "#": {"backgroundColor": "#e8f0fe", "color": "#1a73e8"},  # Light blue
    "@": {"backgroundColor": "#e6ffed", "color": "#22863a"}   # Light green
}

# Use the component with custom tag styles
value = st_autocomplete(
    label="Enter your message",
    trigger_chars=["#", "@"],
    suggestions=suggestions,
    tag_styles=tag_styles
)
```

## Examples

The package includes several examples:

- `examples/simple_autocomplete_example.py` - Basic usage
- `examples/colored_tags_example.py` - Demonstration of colored tags
- `examples/colored_tags_showcase.py` - Comprehensive showcase in different scenarios
- `examples/chat_example.py` - Chat interface with tags
- `examples/streaming_example.py` - Working with streaming operations

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `label` | str | A short label explaining to the user what this input is for |
| `value` | str | The initial value of the text input |
| `trigger_chars` | List[str] | Characters that trigger the suggestion dropdown |
| `suggestions` | Dict[str, List[str]] | Dictionary mapping trigger characters to their suggestion lists |
| `key` | str or None | An optional key that uniquely identifies this component |
| `on_change` | callable or None | An optional callback invoked when this text input's value changes |
| `on_submit` | callable or None | An optional callback invoked when the user submits the input |
| `placeholder` | str | An optional string displayed when the text input is empty |
| `disabled` | bool | An optional boolean, which disables the text input if set to True |
| `label_visibility` | str | The visibility of the label ("visible", "hidden", or "collapsed") |
| `position` | str | The position of the input ("static", "bottom", or "inline") |
| `width` | str | CSS width value (e.g., "100%", "300px") |
| `dropdown_direction` | str | Direction for the suggestions dropdown ("up" or "down") |
| `tag_styles` | Dict[str, Dict[str, str]] | Optional dictionary to customize the appearance of tags for each trigger character |

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Version Management

This project uses [semantic-release](https://github.com/semantic-release/semantic-release) for version management and follows the [Conventional Commits](https://www.conventionalcommits.org/) specification.

When you make commits, use the following prefixes to control version bumping:
- `feat:` - Adds a new feature (minor version bump)
- `fix:` - Fixes a bug (patch version bump)
- `docs:` - Documentation only changes (no version bump)
- `style:` - Changes that do not affect the meaning of the code (no version bump)
- `refactor:` - A code change that neither fixes a bug nor adds a feature (no version bump)
- `perf:` - A code change that improves performance (patch version bump)
- `test:` - Adding missing tests or correcting existing tests (no version bump)
- `chore:` - Changes to the build process or auxiliary tools (no version bump)
- `BREAKING CHANGE:` - In the commit body or footer, triggers a major version bump
