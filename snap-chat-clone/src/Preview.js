import React , {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {selectCameraImage} from './features/cameraSlice';
import CloseIcon from "@material-ui/icons/Close";
import { useHistory } from 'react-router-dom';
import {resetCameraImage} from './features/cameraSlice'


import './Preview.css'

function Preview() {
    const cameraImage = useSelector(selectCameraImage)
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        if(!cameraImage){
            history.replace("/");
        }
    }, [cameraImage, history])
    
    const closePreview = () => {
        dispatch(resetCameraImage());
        //history.replace('/');
    };

    return (
        <div className="preview">
            <CloseIcon onClick={closePreview} className="preview__close"/>
            <img src={cameraImage} alt="userImage" />
        </div>
    )
}

export default Preview
