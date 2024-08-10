import React, { useState, useEffect } from "react";

function AccountContainer(){
    const [records, setRecords]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:8001/transactions")
        .then(response=>response.json())
        .then(data=>setRecords(data))
        .catch(err=>console.log(err));
    }
)
return(
<div>
    <ul>
        {records.map((record,index)=>(
            <li key={index}>
                {record.id}{record.name}
            </li>
        ))}
    </ul>
</div>
)}
export default AccountContainer;