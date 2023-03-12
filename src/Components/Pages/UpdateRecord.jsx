import React, { useState } from 'react';
import data from './Data.json';

function UpdateRecord() {
  const [securityNumber, setSecurityNumber] = useState('');
  const [userData, setUserData] = useState(null);
  const [name, setName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [cnic, setCnic] = useState('');
  const [address, setAddress] = useState({ house: '', street: '', phase: '' });
  const [isConnected, setIsConnected] = useState(false);
  const [billProperties, setBillProperties] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = data.find((user) => user.securityNumber === securityNumber);
    if (user) {
      setUserData(user);
      setName(user.name);
      setFatherName(user.fatherName);
      setCnic(user.cnic);
      setAddress(user.address);
      setIsConnected(user.isConnected);
      setBillProperties(user.billProperties);
    } else {
      setUserData(null);
      alert('User not found!');
    }
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const updatedData = data.map((user) => {
      if (user.securityNumber === securityNumber) {
        return {
          name,
          fatherName,
          cnic,
          address,
          securityNumber,
          isConnected,
          billProperties,
        };
      }
      return user;
    });
    localStorage.setItem('Data', JSON.stringify(updatedData));
    alert('User data updated successfully!');
  };

  return (
    <div style={{ marginLeft: '18vw', marginTop:"2vh" }}>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            value={securityNumber}
            onChange={(event) => setSecurityNumber(event.target.value)}
            style={{ fontSize: '24px', textAlign: 'center', width: '50%', padding: '10px' }}
            placeholder="Security Number"
          />
        </label>
        <button style={{ fontSize: '24px', textAlign: 'center', width: '10%', padding: '10px', backgroundColor: '#98BDFF' }} type="submit">Search</button>
        <br />
        <br />
        <br />
      </form>

      {userData && (
        <form onSubmit={handleUpdate}>
          <label style={{fontSize: '24px'}}>
            Name:
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              style={{ fontSize: '24px', textAlign: 'center', width: '25%', padding: '10px' }}
            />
          </label>
          <br />
          <label style={{fontSize: '24px'}}>
            Father's Name:
            <input
              type="text"
              value={fatherName}
              onChange={(event) => setFatherName(event.target.value)}
              style={{ fontSize: '24px', textAlign: 'center', width: '25%', padding: '10px',marginTop: '10px', marginBottom: '10px' }}
            />
          </label>
          <br />
          <label style={{fontSize: '24px'}}>
            CNIC:
            <input
              type="text"
              value={cnic}
              onChange={(event) => setCnic(event.target.value)}
              style={{ fontSize: '24px', textAlign: 'center', width: '25%', padding: '10px',marginTop: '10px', marginBottom: '10px' }}
            />
          </label >
          <br />
          <label style={{fontSize: '24px'}}>
            Address:
            <input
              type="text"
              placeholder="House"
              value={address.house}
              onChange={(event) =>
                setAddress({ ...address, house: event.target.value })
              }
              style={{ fontSize: '24px', textAlign: 'center', width: '25%', padding: '10px',marginTop: '10px', marginBottom: '10px' }}
            />
            <input
              type="text"
              placeholder="Street"
              value={address.street}
              onChange={(event) =>
                setAddress({ ...address, street: event.target.value })
              }
              style={{ fontSize: '24px', textAlign: 'center', width: '25%', padding: '10px',marginTop: '10px', marginBottom: '10px' }}
            />
            <input
              type="text"
              placeholder="Phase"
              value={address.phase}
              onChange={(event) =>
                setAddress({ ...address, phase: event.target.value })
              }
              style={{ fontSize: '24px', textAlign: 'center', width: '25%', padding: '10px', marginTop: '10px', marginBottom: '10px' }}
            />
          </label>
          <br />
          <label style={{fontSize: '24px'}}>
            Connected:
            <input
              type="checkbox"
              checked={isConnected}
              onChange={(event) => setIsConnected(event.target.checked)}
            />
            </label>
            <br />
            <br />
            <br />
            <button style={{ backgroundColor: '#98BDFF', width: '30rem', height:"2rem" }} type={'submit'}>Submit</button>
        </form>
      )}
    </div>
  )
}

export default UpdateRecord
