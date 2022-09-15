import { Link, useOutletContext } from 'react-router-dom';
import axios from 'axios';

const AllPirates = () => {
    const { sorted } = useOutletContext();

    const deletePirate = (id) => {
        axios
            .delete(`http://localhost:8000/api/pirates/${id}`)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

    return (
        <div className="container">
            {sorted &&
                sorted.map((pirate) => {
                    return (
                        <div className="card bg-light text-black mb-3 d-flex justify-content-center">
                            <div className="card-body" key={sorted._id}>
                                <div className="row">
                                    <div className="col d-flex flex-column justify-content-center align-items-center">
                                        <img src={pirate.image} alt="Profile Picture"
                                            style={{
                                                height: '300px',
                                            }}
                                        />
                                    </div>
                                    <div className="col d-flex flex-column justify-content-center align-items-center">
                                        <h2 className="mb-3">{pirate.name}</h2>
                                        <div className="row gap-4">
                                            <div className="col d-flex flex-column justify-content-center align-items-center">
                                                <Link to={`/pirates/${pirate._id}`} className="btn btn-warning">
                                                    View Pirate
                                                </Link>
                                            </div>
                                            <div className="col d-flex flex-column justify-content-center align-items-center">
                                                <button onClick={() => deletePirate(pirate._id)} className="btn btn-danger"
                                                style={{
                                                    whitespace: 'normal',
                                                }}
                                                >
                                                    Walk the Plank
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AllPirates