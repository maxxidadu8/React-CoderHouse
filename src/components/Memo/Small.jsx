import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

const Small = React.memo(({ value }) => {
    console.log(' Me volví a llamar :(  ');
    
    return <small> {value} </small>;
});

export default Small;
