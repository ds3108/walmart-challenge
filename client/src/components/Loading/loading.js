import React from 'react';
import './loading.scss'
/**
    * Renders a <Loading /> component according with the mockUp. Includes pulse animation with CSS keyframes.
    */
const Loading = () => (
    <div className="loading fade-in" data-testid="loading">
        <div className="circle circle-layer" />
        <div className="circle circle-layer" />
        <div className="circle circle-layer" />
    </div>


);


export default Loading;