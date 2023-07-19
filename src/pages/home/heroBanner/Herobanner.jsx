import React from 'react'
import './herobanner.scss'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'
import { useSelector } from 'react-redux'

const Herobanner = () => {
    const [background, setBackground] = useState("")
    const [query, setQuery] = useState("")
    const navigate = useNavigate()
    const { url } = useSelector((state) => state.home)

    const { data, loading } = useFetch("/movie/upcoming")

    useEffect(() => {
        const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
        setBackground(bg)
    }, [data])

    const searchQueryHandler = (event) => {
        if (event.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`)

        }
    }
    return (
        <div className="heroBanner">
            <div className="wrapper">
                <div className="heroBannerContent">
                    <span className="title">Welcome..</span>
                    <span className="subtitle">Millions of movies,TV shows and people to discover, Explore now.  </span>
                    <div className="serchInput">
                        <input type="text" placeholder='Search for movie or TV show'
                            onChange={(event) => setQuery(event.target.value)}
                            onKeyUp={searchQueryHandler} />
                        <button>Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Herobanner
