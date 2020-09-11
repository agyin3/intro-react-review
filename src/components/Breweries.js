// create your Brewery component here
import React from 'react'

const Breweries = (props) => {
    console.log(props)
    const { name, website_url, brewery_type } = props.brewery
    return(
        <div className='brewery'>
            <h2>{name}</h2>
            <p>Breeery Type: {brewery_type}</p>
            <a href={website_url}>Visit Us Here</a>
        </div>
    )
}

export default Breweries