"""
AI service module for chat example
"""

import os

from azure.identity import AzureCliCredential
from dotenv import load_dotenv
from openai import AzureOpenAI

load_dotenv()

# OpenAI API configuration
ENDPOINT = os.getenv("ENDPOINT_URL")
DEPLOYMENT = os.getenv("DEPLOYMENT_NAME")

# System prompt
SYSTEM_PROMPT = [
    {
        "role": "system",
        "content": [
            {
                "type": "text",
                "text": "You are an AI assistant that helps users with their questions. "
                "When users mention tags with # or people with @, "
                "acknowledge them in your response.",
            }
        ],
    }
]


def get_openai_client():
    """Initialize and return OpenAI client with appropriate authentication"""
    # Try API key first
    api_key = os.getenv("AZURE_OPENAI_API_KEY")
    if api_key:
        return AzureOpenAI(
            azure_endpoint=ENDPOINT,
            api_key=api_key,
            api_version="2024-05-01-preview",
        )

    # Try Azure CLI credential
    credential = AzureCliCredential()
    token = credential.get_token("https://cognitiveservices.azure.com/.default").token

    return AzureOpenAI(
        azure_endpoint=ENDPOINT,
        azure_ad_token=token,
        api_version="2024-05-01-preview",
    )


def create_conversation(message: str):
    """Create conversation history for OpenAI"""
    conversation = SYSTEM_PROMPT.copy()
    conversation.append(
        {"role": "user", "content": [{"type": "text", "text": message}]}
    )
    return conversation


def get_streaming_response(message: str):
    """Get streaming response from OpenAI"""
    conversation = create_conversation(message)
    client = get_openai_client()

    return client.chat.completions.create(
        model=DEPLOYMENT,
        messages=conversation,  # type: ignore
        max_tokens=800,
        temperature=0.7,
        stream=True,
    )
