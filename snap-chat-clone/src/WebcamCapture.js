import React, {useCallback, useRef, useState} from 'react';
import Webcam from 'react-webcam';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import {useDispatch} from "react-redux";
import {setCameraImage} from './features/cameraSlice'

const videoConstraints = {
    width : 250,
    height : 400,
    facingMode : "user"
};

function WebcamCapture(){
    const webcamRef = useRef(null);
    const [image, setImage] = useState(null)
    const dispatch = useDispatch();

    const capture = useCallback( () => {
        const imageSrc = webcamRef.current.getScreenshot();
        console.log(imageSrc);
        //setImage(imgageSrc);
        dispatch(setCameraImage(imageSrc));
    }, [webcamRef])
    return (
        <div className="webcamCapture">
            <Webcam 
             audio = {false}
             height = {videoConstraints.height}
             ref = {webcamRef}
             screenshotFormat="image/jpeg"
             width={videoConstraints.width}
             videoConstraints={videoConstraints}
            />
            <RadioButtonUncheckedIcon 
                className="webcamCapture__button"
                onClick = {capture}
                fontSize = "large"
            />
            <img src={image} alt="" />
        </div>
    );
}
export default WebcamCapture;