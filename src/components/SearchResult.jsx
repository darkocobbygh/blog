import React from 'react'
import './searchResult.css'

const SearchResult = ({result}) => {
  return (
    <div className='search-results'>
      <div className='search-result'>
            <ul>
                <li>{result.title}</li>
            </ul>
        </div>
    </div>
  )
}

export default SearchResult
