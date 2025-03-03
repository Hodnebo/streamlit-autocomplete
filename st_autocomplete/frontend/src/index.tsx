import React from "react";
import ReactDOM from "react-dom";
import {Streamlit, withStreamlitConnection} from "streamlit-component-lib";
import {Autocomplete} from "./components/Autocomplete";

const AutocompleteWithConnection = withStreamlitConnection(Autocomplete);

ReactDOM.render(
    <React.StrictMode>
        <AutocompleteWithConnection/>
    </React.StrictMode>,
    document.getElementById("root")
);

Streamlit.setComponentReady();