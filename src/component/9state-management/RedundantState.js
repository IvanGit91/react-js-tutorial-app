import { useState } from 'react';

export default function RedundantState() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    // Instead of:  const [fullName, setFullName] = useState('');
    // Use:
    const fullName = firstName + ' ' + lastName;

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value);
    }

    return (
        <>
            <h2>Let’s check you in</h2>
            <label>
                First name:{' '}
                <input
                    value={firstName}
                    onChange={handleFirstNameChange}
                />
            </label>
            <label>
                Last name:{' '}
                <input
                    value={lastName}
                    onChange={handleLastNameChange}
                />
            </label>
            <p>
                Your ticket will be issued to: <b>{fullName}</b>
            </p>
        </>
    );
}
