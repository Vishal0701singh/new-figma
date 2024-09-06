import React, { useState } from 'react';
import { CiCircleQuestion } from "react-icons/ci";
import { BiGridVertical } from "react-icons/bi";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
// import { FiArrowRight } from "react-icons/fi";
// import './RightUp.css';
import './RightDown.css';

export default function RightDown() {
    const imageArr = ['images.jpeg', 'images.jpeg', 'images.jpeg'];
    const [image, setImage] = useState(imageArr);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            setImage((pre)=>[...pre,reader.result]); // Preview the image
          };
          reader.readAsDataURL(file);
        }
      };

    return (
        <>
            <div className="RightUp" >
                <CiCircleQuestion className='ques' />
                <BiGridVertical className='grid' />

            </div>
            <div className='bottom2'>
                <div className='header'>
                    <div className="gallery">Gallery</div>
                    <div className="imgbtn">
                        {/* <input type="file" /> */}
                        <div className="addImage">
                            + ADD IMAGE
                            <input type="file" accept="image/*"
                                onChange={handleImageChange} />
                        </div>
                        <div className="slider">
                            <div className="leftbtn"><FiArrowLeft style={{ color: '#858282' }} /></div>
                            <div className="leftbtn"><FiArrowRight style={{ color: '#858282' }} /></div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <ul>
                        {
                            image.map((curr, idex) => {
                                return (
                                    <li key={idex}>
                                        <img src={curr} alt="" className='imageN' />
                                    </li>
                                );

                            })

                        }

                    </ul>

                </div>
            </div>
        </>
    );
}
