import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Select from 'react-select';

const options = [
    { value: 'Captain', label: 'Captain' },
    { value: 'FirstMate', label: 'FirstMate' },
    { value: 'QuarterMaster', label: 'QuarterMaster' },
    { value: 'Bootswain', label: 'Bootswain' },
    { value: 'Swift', label: 'Swift' }
];

const NewPirate = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);


    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pirates', {
            name,
            image,
            chests,
            phrase,
            position,
            pegLeg,
            eyePatch,
            hookHand
        })
            .then(() => {
                navigate('/pirates');
            })
            .catch((err)=>{
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }

    const [name, setName] = useState('');
    const [nameError, setNameError] = useState(null)
    const [image, setImage] = useState('');
    const [imageError, setImageError] = useState(null)
    const [chests, setChests] = useState('');
    const [chestsError, setChestsError] = useState(null)
    const [phrase, setPhrase] = useState('');
    const [phraseError, setPhraseError] = useState(null)
    const [position, setPosition] = useState('Bootswain');
    const [pegLeg, setPegLeg] = useState(true);
    const [eyePatch, setEyePatch] = useState(true);
    const [hookHand, setHookHand] = useState(true);

    const validateName = () => {
        if (name.length < 3) {
            setNameError('Name must be longer than 3 characters.')
        } else {
            setNameError(null)
        }
    }

    const validateImage = () => {
        if (image.length < 1) {
            setImageError('Image is required.')
        } else {
            setImageError(null)
        }
    }

    const validateChests = () => {
        if (chests.length < 1) {
            setChestsError('Number of chests is required.')
        } else {
            setChestsError(null)
        }
    }

    const validatePhrase = () => {
        if (phrase.length < 1) {
            setChestsError('Pirate catch phrase is required.')
        } else {
            setPhraseError(null)
        }
    }

    return (
        <div className="container">
            {errors &&
            errors.map((error, idx) => {
                return <p key={idx}>{error}</p>;
            })}
            <div className="card bg-light text-black mb-3 d-flex justify-content-center">
                <h5 className="card-header text-white">Add Pirate</h5>
                <div className="card-body p-4">
                    <form onSubmit={onSubmitHandler}>
                    {errors &&
                        errors.map((error, idx) => {
                            return <p key={idx}>{error}</p>;
                        })}
                        <div className='mb-4'>
                            <label htmlFor="name" className='form-label'>Name:</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className='form-control'
                                value={name} 
                                onChange={(e) => { setName(e.target.value) }}
                                onBlur={validateName}
                            />
                            {
                                nameError &&
                                <span className="form-text text-danger">{ nameError }</span>
                            }
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="image" className='form-label'>Image URL:</label>
                            <input
                                type="text"
                                name="image"
                                id="image"
                                className='form-control'
                                value={image}
                                onChange={(e) => { setImage(e.target.value) }}
                                onBlur={validateImage}
                            />
                            {
                                imageError &&
                                <span className="form-text text-danger">{ imageError }</span>
                            }
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="chests" className='form-label mx-3'>Chests:</label>
                            <input
                                type="number"
                                name="chests"
                                id="chests"
                                value={chests}
                                onChange={(e) => { setChests(e.target.value) }}
                                onBlur={validateChests}
                            />
                            {
                                chestsError &&
                                <span className="form-text text-danger mx-3">{ chestsError }</span>
                            }
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="phrase" className='form-label'>Catch Phrase:</label>
                            <input
                                type="text"
                                name="phrase"
                                id="phrase"
                                className='form-control'
                                value={phrase}
                                onChange={(e) => { setPhrase(e.target.value) }}
                                onBlur={validatePhrase}
                            />
                            {
                                phraseError &&
                                <span className="form-text text-danger">{ phraseError }</span>
                            }
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="position" className='form-label mx-3'>Position:</label>
                            <select
                                name="position"
                                id="position"
                                onChange={(event) => setPosition(event.target.value)}
                                value={position}
                            >
                                <option value="Bootswain">Bootswain</option>
                                <option value="Captain">Captain</option>
                                <option value="First Mate">First Mate</option>
                                <option value="Quarter Master">Quarter Master</option>
                                <option value="Powder Monkey">Powder Monkey</option>
                            </select>
                        </div>
                            <div className="col">
                                <label htmlFor="pegLeg" className='form-label'>Peg Leg:</label>
                                <input
                                    className="mx-3"
                                    type="checkbox"
                                    name="pegLeg"
                                    id="pegLeg"
                                    onChange={(e) => { setPegLeg(e.target.check) }}
                                />
                                <label htmlFor="eyePatch" className='form-label'>Eye Patch:</label>
                                <input
                                    className="mx-3"
                                    type="checkbox"
                                    name="eyePatch"
                                    id="eyePatch"
                                    onChange={(e) => { setEyePatch(e.target.check) }}
                                />
                                <label htmlFor="hookHand" className='form-label'>Hook Hand:</label>
                                <input
                                    className="mx-3"
                                    type="checkbox"
                                    name="hookHand"
                                    id="hookHand"
                                    onChange={(e) => { setHookHand(e.target.check) }}
                                />
                            </div>
                        <button type="submit" className="col-1 btn btn-warning mt-3">Add Pirate</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewPirate