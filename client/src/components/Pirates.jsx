import { Outlet } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { compareName } from '../sort-utils/Sort.js'


const Pirates = () => {
    const baseUrl = 'http://localhost:8000/api/pirates';
    const [pirates, setPirates] = useState([]);
    const [sorted, setSorted] = useState([])

    let sortedFunction = () => {
        setSorted (pirates.sort(compareName))
    }

    useEffect(() => {
        axios.get(baseUrl)
            .then((res) => {
                setPirates(res.data)
                sortedFunction(pirates)
            })
            .catch(err => console.log(err));
    })

    return (
        <div className="mt-3">
            <Outlet context={{ sorted, setSorted }}/>
        </div>
    )
}

export default Pirates