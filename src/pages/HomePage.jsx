import React, {useEffect} from 'react'
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate()
    useEffect(() => {
        navigate('/v1')
    }, [navigate])
    return <div>&nbsp;</div>
}

export default HomePage