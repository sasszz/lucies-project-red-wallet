import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";

const EditPirate = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);

    const [name, setName] = useState('');
    const [nameError, setNameError] = useState(null)
    const [image, setImage] = useState('');
    const [imageError, setImageError] = useState(null)
    const [chests, setChests] = useState('');
    const [chestsError, setChestsError] = useState(null)
    const [phrase, setPhrase] = useState('');
    const [phraseError, setPhraseError] = useState(null)
    const [position, setPosition] = useState('');
    const [positionError, setPositionError] = useState(null)
    const [pegLeg, setPegLeg] = useState('');
    const [eyePatch, setEyePatch] = useState('');
    const [hookHand, setHookHand] = useState('');


    useEffect(() => {
        axios.get('http://localhost:8000/api/pirates/' + id)
            .then(res => {
                setName(res.data.name);
                setImage(res.data.image);
                setChests(res.data.chests);
                setPhrase(res.data.phrase);
                setPosition(res.data.position);
                setPegLeg(res.data.pegLeg);
                setEyePatch(res.data.eyePatch);
                setHookHand(res.data.hookHand);
            })
    }, []);

    const updatePirate = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/pirates/' + id, {
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
            .catch((error) => {
                console.log(error)
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
                console.log(errorArr)
            })
    }


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

    const validatePosition = () => {
        if (position.length < 1) {
            setChestsError('Pirate position is required.')
        } else {
            setPositionError(null)
        }
    }

    return (
        <div className="container">
            <div className="card bg-light text-black mb-3 d-flex justify-content-center">
                <h5 className="card-header text-white">Edit Pirate</h5>
                <div className="card-body p-4">
                    <form onSubmit={updatePirate}>
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
                            <label htmlFor="image" className='form-label'>Image:</label>
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
                            <label htmlFor="chests" className='form-label'>Chests:</label>
                            <input
                                type="text"
                                name="chests"
                                id="chests"
                                className='form-control'
                                value={chests}
                                onChange={(e) => { setChests(e.target.value) }}
                                onBlur={validateChests}
                            />
                            {
                                chestsError &&
                                <span className="form-text text-danger">{ chestsError }</span>
                            }
                        </div>
                        <button type="submit" className="col-1 btn btn-warning btn-sm me-2">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditPirate