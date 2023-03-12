import { useState } from 'react';
import data from './Data.json';
import ViewBillDetails from './ViewBillDetails';

const ShowData = () => {
    const [selectedSecurityNumber, setSelectedSecurityNumber] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const handleViewBillDetails = (securityNumber) => {
        setSelectedSecurityNumber(securityNumber);
    };

    const handleViewBillDetailsClose = () => {
        setSelectedSecurityNumber(null);
    };

    const filteredData = data.filter(
        (item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.address.house.includes(searchTerm) ||
            item.securityNumber.includes(searchTerm)
    );

    return (
        <div style={{ marginLeft: '18vw' }}>
            {selectedSecurityNumber ? (
                <ViewBillDetails securityNumber={selectedSecurityNumber} onClose={handleViewBillDetailsClose} />
            ) : (
                <>
                    <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'center' }}>
                        <input
                            type="text"
                            placeholder="Search by name, house number or security number"
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{ fontSize: '24px', textAlign: 'center', width: '50%', padding: '10px' }}
                        />
                    </div>
                    <table className="UserTable" style={{ border: '2px solid #98BDFF', borderCollapse: 'collapse', width: '100%' }}>
                        <thead>
                            <tr style={{ background: '#4B49AC', color: '#FFFFFF' }}>
                                <th style={{ padding: '12px 15px' }}>Name</th>
                                <th style={{ padding: '12px 15px' }}>Father Name</th>
                                <th style={{ padding: '12px 15px' }}>CNIC</th>
                                <th style={{ padding: '12px 15px' }}>Address</th>
                                <th style={{ padding: '12px 15px' }}>Security Number</th>
                                <th style={{ padding: '12px 15px' }}>Connected</th>
                                <th style={{ padding: '12px 15px' }}>View Bill Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((item, index) => (
                                <tr key={item.securityNumber} style={{ background: index % 2 === 0 ? '#E6E6FA' : '#F0F8FF' }}>
                                    <td style={{ padding: '12px 15px' }}>{item.name}</td>
                                    <td style={{ padding: '12px 15px' }}>{item.fatherName}</td>
                                    <td style={{ padding: '12px 15px' }}>{item.cnic}</td>
                                    <td style={{ padding: '12px 15px' }}>{`${item.address.house}/${item.address.street}/${item.address.phase}`}</td>
                                    <td style={{ padding: '12px 15px' }}>{item.securityNumber}</td>
                                    <td style={{ padding: '12px 15px' }}>{item.isConnected ? 'Yes' : 'No'}</td>
                                    <td style={{ padding: '12px 15px' }}>
                                        <button onClick={() => handleViewBillDetails(item.securityNumber)}>View Bill Details</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}
        </div>
    );
};

export default ShowData;
