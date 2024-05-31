import React from 'react';
import {Button} from "@mui/material";
import MainRoutes from "../../MainRoutes/MainRoutes";
import ButtonMatertial from "../../components/ButtonMaterial/ButtonMatertial";
import {useNavigate} from "react-router-dom";

function HomePage() {

    const navigate = useNavigate()

    return (
        <div>
            <ButtonMatertial
                value='Лисы'
                variant='contained'
                onClick={() => {navigate('/foxs')}}
            />
             <ButtonMatertial
                 value='Коты'
                 variant='contained'
                 onClick={() => {navigate('/cats')}}
             />
        </div>
    );
}

export default HomePage;