import React from "react";
import TextField from "@material-ui/core/TextField";

function Cards({ posts }) {
    return <TextField
        id="outlined-full-width"
        label="Search"
        style={{
            left: 0,
            right: 0,
            position: 'absolute',
            marginRight: 10,
            marginLeft: 10
        }}
        placeholder="Search..."
        margin="normal"
        InputLabelProps={{
            shrink: true,
        }}
        variant="outlined"
    />
}

export default Cards;