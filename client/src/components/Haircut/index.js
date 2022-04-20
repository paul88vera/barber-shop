import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { } from '../utils/mutations';

const haircutForm = (userId) => {
    const [haircutName, setName] = useState('');
    const [haircutBody, setBody] = useState('');
    const [addHaircut, { error }] = useMutation(ADD_HAIRCUT);


    const handleFormSubmit = async event => {
        event.preventDefault();
        try {
            await addHaircut({
                variables: { haircutName, haircutBody},
            });

            setName('');
            setBody('');
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div class="card">
            <div class="container">
                <form onSubmit={handleFormSubmit}>
                    <textarea placeholder="Enter your name"
                    value={haircutName}
                    ></textarea>
                    <textarea placeholder="Enter your haircut instructions"
                    value={haircutBody}
                    ></textarea>
                    <button className="" type="submit">
                        Submit
                    </button>
                </form>
                {error && <div>Something went wrong...</div>}
            </div>
        </div>
    )


}

export default haircutForm;