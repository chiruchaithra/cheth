import QuoteList from "../components/quotes/QuoteList";
import {getAllQuotes} from '../components/lib/api'
import useHttp from "../components/hooks/use-http";
import {useEffect} from "react";
const DUMMY_QUOTES = [
    {id:'q1',author:'chaithra',text:'learn react'},
    {id:'q2',author:'chaithraCheth',text:'learn react'}
]
const AllQuotes = () => {
    const {sendRequest,data,error,status} = useHttp(getAllQuotes,true)
    useEffect(() => {

    },[])
    return (
        <QuoteList
            quotes={DUMMY_QUOTES}
        />
    )
}
export default AllQuotes
