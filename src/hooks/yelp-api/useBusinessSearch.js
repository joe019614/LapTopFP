import { useState, useEffect} from "react"
import * as api from './api'


export  function useBusinessSearch(term,location) {
    const [businesses,setBusinesses] = useState([]);
    const [amountResults,setAmountResults] = useState();
    const [apiSearchParams,setapiSearchParams] = useState({term, location});

    useEffect(()=>{ 
        setBusinesses([]);
        const fetchData = async  ()=>{
            try{
                const rawData = await api.get('/businesses/search'/* ${path} */, apiSearchParams/* ${query} */);
                const resp = await rawData.json();
                setBusinesses(resp.businesses);
                setAmountResults(resp.total);/* ? */
            } catch(e){
                console.error(e);
                }
            };  
            fetchData();    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[apiSearchParams]);/* ? */
    return [businesses,amountResults,apiSearchParams,setapiSearchParams];
}
