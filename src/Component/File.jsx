import React from 'react';
import './File.css';
import RightUp from './RightUp';
import RightDown from './RightDown';

export default function File() {
    return (
        <div className='mainBody'>
            <div className="file">
                <div className="inner">
                    <div className='inner1'>
                        <div className="left"></div>
                        <div className="right">
                            <div className="right-up">
                            <RightUp />
                            </div>
                            <div className="line"></div>
                            <div className="right-down">
                                <RightDown/>
                            </div>
                        </div>
                    </div>
                    <div className="inner-bottom">

                    <div className="left-bottom"></div>
                        <div className="right-bottom">
                        <div className="line"></div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
}
