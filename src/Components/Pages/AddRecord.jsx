import React from 'react'
import { useState } from 'react';
import data from './Data.json';

const AddRecord = () => {
    const [name, setName] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [cnic, setCnic] = useState('');
    const [house, setHouse] = useState('');
    const [street, setStreet] = useState('');
    const [phase, setPhase] = useState('');
    const [securityNumber, setSecurityNumber] = useState('');
    const [isConnected, setIsConnected] = useState(false);
    const [billProperties, setBillProperties] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Check if the securityNumber already exists in the data array
        const existingRecord = data.find((record) => record.securityNumber === securityNumber);
        if (existingRecord) {
            alert(`A record with the security number ${securityNumber} already exists.`);
            return;
        }

        // Create a new record and add it to the data array
        const newRecord = {
            name,
            fatherName,
            cnic,
            address: { house, street, phase },
            securityNumber,
            isConnected,
            billProperties,
        };
        data.push(newRecord);

        // Write the updated data array to the Data.json file
        // Note: This will not work in a real production environment
        // because you can't modify the contents of a JSON file on the client side.
        // You would need to use a server-side script to handle the file writing.
        fetch('/write-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                alert('Record added successfully!');
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('An error occurred while adding the record. Please try again later.');
            });

        // Reset the form fields
        setName('');
        setFatherName('');
        setCnic('');
        setHouse('');
        setStreet('');
        setPhase('');
        setSecurityNumber('');
        setIsConnected(false);
        setBillProperties([]);
    };

    const handleBillPropertiesChange = (event, index) => {
        const { name, value } = event.target;

        // Update the bill property at the specified index
        setBillProperties((prevState) => {
            const updatedBillProperties = [...prevState];
            updatedBillProperties[index] = {
                ...updatedBillProperties[index],
                [name]: value,
            };
            return updatedBillProperties;
        });
    };

    const handleAddBillProperty = () => {
        // Add a new bill property object to the billProperties array
        setBillProperties((prevState) => [...prevState, { id: `B${prevState.length + 1}`, amount: 0, status: 'Not Paid', month: '', late: false },]);
    };

    const handleRemoveBillProperty = (index) => {
        // Remove the bill property at the specified index
        setBillProperties((prevState) => prevState.filter((_, i) => i !== index));
    };
    return (
        <div style={{ marginLeft: '18vw' }}>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <br />
                    <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
                </label>
                <br />
                <label>
                    Father's Name:
                    <br />
                    <input type="text" value={fatherName} onChange={(event) => setFatherName(event.target.value)} />
                </label>
                <br />
                <label>
                    CNIC:
                    <br />
                    <input type="text" value={cnic} onChange={(event) => setCnic(event.target.value)} />
                </label>
                <br />
                <label>
                    House No.:
                    <br />
                    <input type="text" value={house} onChange={(event) => setHouse(event.target.value)} />
                </label>
                <br />
                <label>
                    Street:
                    <br />
                    <input type="text" value={street} onChange={(event) => setStreet(event.target.value)} />
                </label>
                <br />
                <label>
                    Phase:
                    <br />
                    <input type="text" value={phase} onChange={(event) => setPhase(event.target.value)} />
                </label>
                <br />
                <label>
                    Security Number:
                    <br />
                    <input type="text" value={securityNumber} onChange={(event) => setSecurityNumber(event.target.value)} />
                </label>
                <br />
                <label>
                    Connected:
                    <input type="checkbox" checked={isConnected} onChange={(event) => setIsConnected(event.target.checked)} />
                </label>
                <br />
                <label>
                    Bill Properties:
                </label>
                <br />
                {billProperties.map((billProperty, index) => (
                    <div key={billProperty.id}>
                        <label>
                            Amount:
                            <br />
                            <input type="number" value={billProperty.amount} onChange={(event) => handleBillPropertiesChange(event, index)} name="amount" />
                        </label>
                        <br />
                        <label>
                            Status:
                            <br />
                            <select value={billProperty.status} onChange={(event) => handleBillPropertiesChange(event, index)} name="status">
                                <option value="Not Paid">Not Paid</option>
                                <option value="Paid">Paid</option>
                            </select>
                        </label>
                        <br />
                        <label>
                            Month:
                            <br />
                            <input type="text" value={billProperty.month} onChange={(event) => handleBillPropertiesChange(event, index)} name="month" />
                        </label>
                        <br />
                        <label>
                            Late:
                            <input type="checkbox" checked={billProperty.late} onChange={(event) => handleBillPropertiesChange(event, index)} name="late" />
                        </label>
                        <br />
                        <button type="button" onClick={() => handleRemoveBillProperty(index)}>Remove Bill Property</button>
                    </div>
                ))}
                <button type="button" onClick={handleAddBillProperty}>Add Bill Property</button>
                <br />
                <button type="submit" style={{ marginTop: '10px' }}>Submit</button>
            </form>
        </div>

    )
}

export default AddRecord
