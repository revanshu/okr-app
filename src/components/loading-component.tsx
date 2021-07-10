import React from 'react';
import loadingIcon from '../assets/loading-buffering.gif';

export default function LoadingComponent() {
  return (
   <>
    <img id="loading-icon" src={loadingIcon} alt="Loading..."/>
   </>
  )
}
