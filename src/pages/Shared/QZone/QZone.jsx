import React from 'react';
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const QZone = () => {
    return (
        <div className='mt-4 rounded' style={{backgroundColor:'#F3F3F3', padding: '15px'}}>
            <h4 className='fs-5 fw-bold mb-3'>Q-Zone</h4>
            <div className="img-wrap d-flex flex-column gap-4">
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default QZone;