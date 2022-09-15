import { useOutletContext, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ShowPirate = () => {
    const { id } = useParams();
    const [pirate, setPirate] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/pirates/${id}`)
            .then((res) => setPirate(res.data))
            .catch((err) => console.log(err));
    });

    return (
        <div className="container">
            {pirate && (
            <div className="card bg-light text-black mb-3 d-flex justify-content-center">
                <h5 className="card-header text-white">{pirate.name}</h5>
                <div className="card-body p-4">
                    <div className="row">
                        <div className="col-5 d-flex flex-column justify-content-center">
                            <img src={pirate.image} alt="Profile Picture" 
                            style={{
                                width: '400px',
                            }}
                            />
                            <h4 className="mt-4">"{pirate.phrase}"</h4>
                        </div>
                        <div className="col d-flex flex-column justify-content-center align-items-center">
                            <h3 className="mb-4">About</h3>
                            <p><span className="text-white">Position: </span> {pirate.position}</p>
                            <p><span className="text-white">Treasures Found: </span> {pirate.chests}</p>
                            <p><span className="text-white">Peg Leg: </span> {pirate.pegLeg ? "Yes" : "No"}</p>
                            <p><span className="text-white">Eye Patch: </span> {pirate.eyePatch ? "Yes" : "No"}</p>
                            <p><span className="text-white">Hook Hand: </span> {pirate.hookHand ? "Yes" : "No"}</p>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}

export default ShowPirate