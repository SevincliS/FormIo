import React, { useState } from 'react';


const ActiveButton = {background: "#D8D8D8" ,color:"#1C1D1D"}

const BasicCode = () => {
    return (
        <p>
        {`<form`}<span className={"editor-action-color"}>{` action="{form2-endpoint}"`}</span>{` method="POST">`}<br/>
        &nbsp;&nbsp;{`<input type="text`}<span className={"editor-field-color"}>{` "name="name"`}</span>{`>`}<br/>
        &nbsp;&nbsp;{`<input type="email`}<span className={"editor-field-color"}>{` "name="email"`}</span>{`>`}<br/>
        &nbsp;&nbsp;{`<button type="submit">Send</button>`}<br/>
        {`</form>`}
        </p>
    )
}

const FileUploadCode = () => {
    return (
        <p>
        {`<form`}<span className={"editor-action-color"}>{` action="{form2-endpoint}"`}</span><span className={"editor-action-color"}>{` enctype="multipart/form-data"`}</span>{` method="POST">`}<br/>
        &nbsp;&nbsp;{`<input type="email"`}<span className={"editor-field-color"}>{` "name="email"`}</span>{`>`}<br/>
        &nbsp;&nbsp;{`<input type="file"`}<span className={"editor-field-color"}>{` "name="file"`}</span>{`>`}<br/>
        &nbsp;&nbsp;{`<button type="submit">Send</button>`}<br/>
        {`</form>`}
        </p>

    )
} 

const FetchCode = () => {
    return (
        <p>
        {`const formData = new FormData();`}<br/>
        {`formData.append(`}<br/>
        &nbsp;&nbsp;{`'email',`}<br/>
        &nbsp;&nbsp;{`document.querySelector('input`}<span className={"editor-field-color"}>{`[name="email"]`}</span>{`').value`}<br/>
        {`)`}<br/>
        {`fetch("`}<span className={"editor-action-color"}>{`{getform-endpoint}`}</span>{`",`}<br/>
        &nbsp;{`{`}<br/>
        &nbsp;&nbsp;{`method: "POST",`}<br/>
        &nbsp;&nbsp;{`body: formData,`}<br/>
        &nbsp;{`}).then(r => console.log("Success"))`}<br/>
        </p>

    )
}


let formTypes = [{key:'basic', label:'Basic', component:BasicCode},{key:'fileUpload',  label: 'FileUpload', component:FileUploadCode},{ key:'fetch', label:'Fetch', component:FetchCode}];
const Editor = () => {
    const [active, setActive] = useState("basic");

    return(
        <div className={"editor"}>
            <div className={"editor-top-bar"}>
                {formTypes.map(({key,label}) =><button onClick={() => {
                    setActive(key)
                    }} style={active == key ? ActiveButton : null} >{label}</button> )}
            </div>
            <div className={"editor-text"}>
            {formTypes.map(({key,label, component}) => active == key ? component() : null )}
            </div>
    
        </div>
    )
}



export default Editor