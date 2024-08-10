import React, { useState, useEffect } from 'react';

function AccountContainer() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/transactions", {
      headers: {
        "sec-ch-ua": "\"Google Chrome\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
        "sec-ch-ua-mobile": "?1",
        "sec-ch-ua-platform": "\"Android\""
      },
      referrer: "http://localhost:3001/",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: null,
      method: "GET",
      mode: "cors",
      credentials: "omit"
    })
    .then(response => response.json())
    .then(data => setRecords(data))
    .catch(err => console.error(err));
  }, []); // Empty dependency array to run once on mount

  return (
    <div>
      <h1>Transaction Records</h1>
      <ul>
        {records.map((record, index) => (
          <li key={index}>
            {record.id} - {record.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AccountContainer;
