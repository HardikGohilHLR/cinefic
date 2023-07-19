// SignUp
'use client';

import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
    const [formValues, setFormValues] = useState({
        userName: '',
        email: '',
        password: '',
    });

    const signup = async () => {
        axios.post('/api/signup', formValues)
            .then(data => console.log('data', data))
            .catch(error => console.log('error', error));
    }

    return (
        <>
            <h1>
                SignUp
            </h1>

            <div>
                <label htmlFor="userName">Username</label>
                <input type="text" value={formValues?.userName} onChange={(e) => setFormValues({ ...formValues, userName: e?.target?.value })} />
            </div>
            <div>
                <label htmlFor="email">email</label>
                <input type="text" value={formValues?.email} onChange={(e) => setFormValues({ ...formValues, email: e?.target?.value })} />
            </div>
            <div>
                <label htmlFor="password">password</label>
                <input type="text" value={formValues?.password} onChange={(e) => setFormValues({ ...formValues, password: e?.target?.value })} />
            </div>

            <button onClick={signup}>
                Submit
            </button>

        </>
    )
}

export default SignUp;