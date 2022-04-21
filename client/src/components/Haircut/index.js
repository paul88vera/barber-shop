import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_HAIRCUT } from '../../utils/mutations';
import { } from '../utils/mutations';

const HaircutForm = (userId) => {
    const [haircutText, setName] = useState('');
    const [instructions, setBody] = useState('');
    const [addHaircut, { error }] = useMutation(ADD_HAIRCUT);


    const handleFormSubmit = async event => {
        event.preventDefault();
        try {
            await addHaircut({
                variables: { haircutText, instructions},
            });

            setName('');
            setBody('');
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className="card">
            <div className="container">
                <form onSubmit={handleFormSubmit}>
                    <textarea placeholder="Name your haircut"
                    value={haircutText}
                    ></textarea>
                    <textarea placeholder="Enter your haircut instructions"
                    value={instructions}
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

export default HaircutForm;