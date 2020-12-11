import React from 'react';
import logoType from '../../assets/img/form2_logo_type.svg'
import Editor from './Editor'





const Introduction = () => {
    return(
      <div className={"introduction"}>
        <h4>THIS IS</h4>
        <img src={logoType} alt={"form2-logotype"} />
        <p className={"introduction-paragraph"}>The only all-in-one form backend.  Use your HTML forms or build one here. 
        Expand your form with built-in plugins and integrations.</p>
        <button className={"introduction-button"}>Get Started</button>
        <a href={""}>Watch Video</a>
        <Editor/>
      </div>
    )
  
}

export default Introduction

