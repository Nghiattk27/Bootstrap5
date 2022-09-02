import React, { useState } from 'react';
import './CheckBx.scss';
import tick from "../../../images/tick.png";
import ImgBx from '../../ImgBx/ImgBx';

function CheckBx() {

    const [ok, setOk] = useState(false);
    return (
        <div className='CheckBx' onClick={() => setOk(!ok)}>
            {
                ok &&
                <ImgBx img={tick} />
            }
        </div>
    )
}

export default CheckBx