import os
import streamlit.components.v1 as components

# Get the directory of the current file
parent_dir = os.path.dirname(os.path.abspath(__file__))
build_dir = os.path.join(parent_dir, "frontend/build")
component_func = components.declare_component("st_autocomplete", path=build_dir) 