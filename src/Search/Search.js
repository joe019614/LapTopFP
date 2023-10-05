import React from 'react'
import NavBar from '../NavBar/NavBar'
import SubNav from '../NavBar/SubNav/SubNav'
import SearchResultsSummary from './SearchResultsSummary/SearchResultsSummary'
import SearchResults from './SearchResults/SearchResults'
import  {useSearchParams} from 'react-router-dom';
import { useBusinessSearch } from '../hooks/yelp-api/useBusinessSearch'

export default function Search() {
  const [searchParams] = useSearchParams();
  const term = searchParams.get('find_desc');
  const locationParam = searchParams.get('find_loc');
  const [businesses,amountResults,apiSearchParams,setapiSearchParms] = useBusinessSearch(term,locationParam);

  return (
    <div>
        <NavBar term={term} location={locationParam}/>
        <SubNav/>  
        <SearchResultsSummary term={term} location={locationParam}/>
        <SearchResults businesses={businesses}/>
    </div>
  )
}
