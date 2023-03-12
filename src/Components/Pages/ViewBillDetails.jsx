import data from './Data.json';

const ViewBillDetails = (props) => {
  const { securityNumber, onClose } = props;
  const billDetails = data.find((d) => d.securityNumber === securityNumber)?.billProperties ?? [];

  if (billDetails.length === 0) {
    return (
      <div>
        <button style={{ backgroundColor: '#98BDFF', width: '100%', height:"2rem" }} onClick={onClose}>Back</button>
        <p>No bills found for security number {securityNumber}</p>
      </div>
    );
  }

  return (
    <div>
      <button style={{ backgroundColor: '#98BDFF', width: '100%', height:"2rem" }} onClick={onClose}>Back</button>
      <table style={{ border: '2px solid #98BDFF', borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr style={{ background: '#4B49AC', color: '#FFFFFF' }}>
            <th style={{ padding: '12px 15px' }}>Security Number</th>
            <th style={{ padding: '12px 15px' }}>Bill ID</th>
            <th style={{ padding: '12px 15px' }}>Amount</th>
            <th style={{ padding: '12px 15px' }}>Status</th>
            <th style={{ padding: '12px 15px' }}>Month</th>
            <th style={{ padding: '12px 15px' }}>Late</th>
          </tr>
        </thead>
        <tbody>
          {billDetails.map((bill) => (
            <tr key={bill.id} style={{ background: '#E6E6FA' }}>
              <td style={{ padding: '12px 15px' }}>{securityNumber}</td>
              <td style={{ padding: '12px 15px' }}>{bill.id}</td>
              <td style={{ padding: '12px 15px' }}>{bill.amount}</td>
              <td style={{ padding: '12px 15px' }}>{bill.status}</td>
              <td style={{ padding: '12px 15px' }}>{bill.month}</td>
              <td style={{ padding: '12px 15px' }}>{bill.late ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button style={{ backgroundColor: '#98BDFF', width: '100%', height:"2rem" }} onClick={onClose}>Back</button>
    </div>
  );
};

export default ViewBillDetails;
