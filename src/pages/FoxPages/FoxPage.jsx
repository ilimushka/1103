import React, {useEffect, useState} from 'react';
import axios from "axios";
import ButtonMatertial from "../../components/ButtonMaterial/ButtonMatertial";

function FoxPage(props) {

    const [loading, setLoading ] = useState(false)
    const [image, setImage ] = useState('')

    const getFox = async () => {
        try {
            const response = await axios.get('https://randomfox.ca/floof/')
            console.log(response.data)
            setImage(response.data.image)
        } catch (e) {
            console.log(e)
        }
    }

    // useEffect(() => {
    //     getFox()
    // }, [])

    return (
        <div>
            <div>
                <ButtonMatertial
                    value='Нажми меня'
                    onClick={getFox}
                    variant='contained'
                />
            </div>
            <img src={image} alt=""/>
        </div>
    );
}

export default FoxPage;