import React from 'react'
import NavBar from '../NavBar/NavBar'
import SubNav from '../NavBar/SubNav/SubNav'
import SearchResultsSummary from './SearchResultsSummary/SearchResultsSummary'
import SearchResults from './SearchResults/SearchResults'
import  {useSearchParams} from 'react-router-dom';
/* import useReactRouter from 'use-react-router' */
/* 
export default function Search() {
    const {location}=useReactRouter();
    const params = new URLSearchParams(location,search);
    const termParam = params.get('find_desc');
    const locationParam = params.get('find_loc'); */
export default function Search() {
  const [searchParams/* ,setSearchParams */] = useSearchParams();
  const termParam = searchParams.get('find_desc');
  const locationParam = searchParams.get('find_loc');
  return (
    <div>
        <NavBar term={termParam} location={locationParam}/>
        <SubNav/>  
        <SearchResultsSummary term={termParam} location={locationParam}/>
        <SearchResults/>
    </div>
  )
}
