import React from 'react'
import NavBar from '../NavBar/NavBar'
import SubNav from '../NavBar/SubNav/SubNav'
import SearchResultsSummary from './SearchResultsSummary/SearchResultsSummary'
import SearchResults from './SearchResults/SearchResults'
import  {useSearchParams} from 'react-router-dom';
import { useBusinessSearch } from '../hooks/yelp-api/useBusinessSearch'
/* import {useNavigate} from 'react-router-dom' */

export default function Search() {
 /*  const navigate= useNavigate(); */
  const [searchParams] = useSearchParams();
  const term = searchParams.get('find_desc');
  const locationParam = searchParams.get('find_loc');
  const [businesses,amountResults,apiSearchParams,performSearch] = useBusinessSearch(term,locationParam);
/* 
  if (!term || !locationParam) {
    navigate('/');
}


function search(term, location) {
    const encodedTerm = encodeURI(term);
    const encodedLocation = encodeURI(location);
    navigate(`/search?find_desc=${encodedTerm}&find_loc=${encodedLocation}`);
    performSearch({term, location});
}
 */
  function search(term,location){
    console.log("called");
    performSearch({term,location})
  }

  
  return (
    <div>
        <NavBar term={term} location={locationParam} search={search}/>
        <SubNav/>  
        <SearchResultsSummary 
          term={apiSearchParams.term}
          location={apiSearchParams.location}
          amountResults={amountResults}
          shownResults={businesses ? businesses.length : 0}
        />
        <SearchResults businesses={businesses}/>
    </div>
  )
}
