import streamlit as st
from st_autocomplete import st_autocomplete

st.title("Autocomplete Component Test")
st.markdown("Type # to see tag suggestions or @ to see mention suggestions")
st.markdown("Try partial matching by typing '#avtalpl' to match 'avtale: ansatt pluss'")
st.markdown("After selecting a tag, you can add another one by typing # again")

# Define your suggestions with some containing whitespace
tags = [
    "feature", 
    "bug", 
    "documentation", 
    "enhancement", 
    "question", 
    "help",
    "avtale: ansatt pluss",  # Tag with whitespace
    "task: urgent",          # Another tag with whitespace
    "area: frontend",        # Another tag with whitespace
    "status: ready"          # Another tag with whitespace
]
mentions = [
    "user1", 
    "user2", 
    "admin", 
    "support", 
    "development team",      # Mention with whitespace
    "project manager",       # Another mention with whitespace
    "design group"           # Another mention with whitespace
]

# Create a dictionary mapping trigger characters to suggestion lists
suggestions = {
    "#": tags,
    "@": mentions
}

# Use the component
value = st_autocomplete(
    label="Enter your message",
    value="",  # Initial value
    trigger_chars=["#", "@"],  # Characters that trigger suggestions
    suggestions=suggestions,  # Suggestion lists
    key="my_input",
    debounce=100,  # Update every 100ms
    placeholder="Type # for tags or @ for mentions (try adding multiple tags)",
    dropdown_direction="up"
)

# Use the value like any other Streamlit input
st.markdown("You entered: " + value)

# Show example of tagging multiple items
st.subheader("Example Usage")
st.code("Try typing: #bug #feature This is a message with @user1 and @development team")

# Show the current suggestions
st.subheader("Available Suggestions")

st.markdown("Tags:")
for tag in tags:
    st.markdown(f"- {tag}")

st.markdown("Mentions:")
for mention in mentions:
    st.markdown(f"- {mention}") 