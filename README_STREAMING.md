# Streamlit Autocomplete Component with Streaming Support

This guide explains how to use the Streamlit Autocomplete component in applications that involve streaming or other long-running operations.

## The Problem

By default, Streamlit components trigger a rerun of the entire app when their value changes. For the autocomplete component, this means that every keystroke would cause a rerun, interrupting any ongoing streaming operations or long-running processes.

## The Solution

The Streamlit Autocomplete component now includes a feature to prevent interruption of streaming operations with the `update_on_change` parameter:

```python
st_autocomplete(
    label="Input",
    value="",
    trigger_chars=["#", "@"],
    suggestions=suggestions,
    # Prevent reruns during typing
    update_on_change=False
)
```

## Implementation Guide

To use the autocomplete component with streaming operations:

### 1. Set `update_on_change=False`

This is the key parameter that prevents the component from triggering reruns on every keystroke:

```python
user_input = st_autocomplete(
    label="Message",
    value=st.session_state.user_input,
    trigger_chars=["#", "@"],
    suggestions=suggestions,
    update_on_change=False,
    debounce=None,  # Debounce isn't needed when update_on_change is False
)
```

### 2. Use a Form for Input Submission

Wrap your input in a Streamlit form to control when the app reruns:

```python
with st.form(key="message_form"):
    user_input = st_autocomplete(...)
    submit_button = st.form_submit_button("Send")

    if submit_button and user_input:
        # Process the input
```

### 3. Store Input in Session State

To preserve the input value across reruns:

```python
# Initialize session state
if "user_input" not in st.session_state:
    st.session_state.user_input = ""

# In your form
user_input = st_autocomplete(
    value=st.session_state.user_input,
    # ...other parameters
)

# Update session state
st.session_state.user_input = user_input
```

## Example Application

See the file `examples/simple_autocomplete_example.py` for a complete working example that demonstrates:

1. Using autocomplete with `update_on_change=False`
2. Preserving input across reruns with session state
3. Using a form for controlled submission
4. Running a streaming operation without interruption

## Best Practices

- Always set `update_on_change=False` when using the autocomplete component with streaming operations
- Store the input value in session state to preserve it across reruns
- Use a form to control when the app reruns
- You may want to disable the input field or show a loading indicator during streaming operations

## Compatibility

This feature is compatible with Streamlit 1.10.0 and above.
