import React from 'react';
import {Button} from "@mui/material";

const ButtonMatertial = (props) => {

    const {
        value,
        onClick,
        variant,
    } = props

    return (
        <Button
            variant={variant}
            onClick={onClick}
        >
            {value}
        </Button>
    );
};

export default ButtonMatertial;