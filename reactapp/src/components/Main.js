import React, { useState, useEffect } from 'react';

function Main() {

    const [portfol, setPortfol] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function populatePortfolData() {
            const response = await fetch('mainportfolio');
            const data = await response.json();
            setPortfol(data);
            setLoading(false);
        }

        populatePortfolData();
    }, []);

    const renderPortfolTable = (portfolInfos) => {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Skill</th>
                        <th>Level</th>
                        <th>Additional Info</th>
                        <th>Remark</th>
                    </tr>
                </thead>
                <tbody>
                    {portfolInfos.map(portfolInfo =>
                        <tr key={portfolInfo.skill}>
                            <td>{portfolInfo.skill}</td>
                            <td>{portfolInfo.level}</td>
                            <td>{portfolInfo.additionalinfo}</td>
                            <td>{portfolInfo.remark}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    };

  return (
      <div style={{ color: '#2483ff' }}>
          {loading ? <p><em>Loading... </em></p> : renderPortfolTable(portfol)}
      </div>
  );
}

export default Main;