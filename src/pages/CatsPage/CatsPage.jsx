import React, {useEffect, useState} from 'react';
import axios from "axios";
import ButtonMatertial from "../../components/ButtonMaterial/ButtonMatertial";

function CatsPage(props) {

    const [loading, setLoading ] = useState(false)
    const [image, setImage ] = useState([])

    const getCat = async () => {
        try {
            const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=1&api_key=333ac102-97bb-4811-a48c-0164b1756041')
            console.log(response.data)
            setImage(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    // useEffect(() => {
    //     getCat()
    // }, [])

    return (
        <div>
            <div>
                <ButtonMatertial
                    value='Нажми меня'
                    variant='contained'
                    onClick={getCat}
                />
            </div>
            {image.map((item, idx) => {
                return (
                    <img key={idx} src={item.url} alt=""/>
                )
            })}
        </div>
    );
}

export default CatsPage;