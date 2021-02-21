import React from 'react';
import './error.scss'
import { Alert } from 'react-bootstrap';
/**
    * Renders a <Loading /> component according with the mockUp. Includes pulse animation with CSS keyframes.
    */
const Error = ({error}) => (
    <Alert className="error-container" variant={(error==='NO_RESULTS') ? 'warning' :'danger'}>
        <Alert.Heading>Ups, algo ha pasado..</Alert.Heading>
        <p>
           {(error==='NO_RESULTS') ? ' Tu búsqueda no ha arrojado resultados' :' Quizás no estás conectado a internet? Solo tal vez..' }
  </p>
    </Alert>


);


export default Error;