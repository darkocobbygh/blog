import React from 'react'
import SearchResult from './SearchResult'

const SearchResultsList = ({results}) => {
  return (
    <div>
      {results.map((result)=>{
        return <SearchResult result={result} key={result._id}/>
      })}
    </div>
  )
}

export default SearchResultsList
