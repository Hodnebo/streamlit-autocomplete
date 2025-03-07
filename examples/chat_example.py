"""
Simple chat example with tag and mention autocomplete
"""
import streamlit as st

from ai_service import get_streaming_response
from st_autocomplete import st_autocomplete


def init_session_state():
    """Initialize session state"""
    if "messages" not in st.session_state:
        st.session_state.messages = []


def main():
    st.set_page_config(layout="wide")

    st.title("Chat with Autocomplete")
    st.caption("Type # for tags or @ for mentions")

    # Initialize chat history
    init_session_state()

    chat_container = st.container(height=650)
    st.session_state["chat_container"] = chat_container

    # Input field with autocomplete in the input container
    suggestions = {"#": tags}

    # Display previous messages
    display_previous()

    st_autocomplete(
        label="hello",
        value="",
        trigger_chars=["#", "@"],
        suggestions={
            '@': ['user1', 'user2', 'admin'],
            '#': ['react', 'typescript', 'javascript']
        },
        key="chat_input",
        placeholder="Type a message (use # for tags, @ for mentions)",
        on_submit=handle_message,
        dropdown_direction="up",
    )


def handle_message(message: str):
    """Process the user message and generate AI response"""

    user_message = {"role": "user", "content": message}
    st.session_state.messages.append(user_message)
    with st.session_state["chat_container"]:
        with st.chat_message(user_message["role"], avatar="👤"):
            st.markdown(user_message["content"])
        with st.chat_message("assistant", avatar="🤖"):
            answer = st.write_stream(get_streaming_response(message))
    st.session_state.messages.append({"role": "assistant", "content": answer})


def display_previous():
    """Display all previous messages in the chat container."""
    with st.session_state["chat_container"]:
        for message in st.session_state.messages:
            with st.chat_message(message["role"], avatar="👤" if message["role"] == "user" else "🤖"):
                st.markdown(message["content"])


# Available suggestions for autocomplete
tags = [
    "question", "help", "issue", "feature", "bug", "documentation",
    "enhancement", "support", "avtale: ansatt pluss", "task: urgent",
    "area: frontend", "status: ready",
    "react", "javascript", "typescript", "python", "java", "c++",
]

if __name__ == "__main__":
    main()
