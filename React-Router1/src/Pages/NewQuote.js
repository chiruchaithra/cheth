import {useHistory} from 'react-router-dom'
import QuoteForm from "../components/quotes/QuoteForm";
import {addQuote} from '../components/lib/api'
import useHttp from "../components/hooks/use-http";
import {useEffect} from 'react'

const NewQuote = () => {
    const {sendRequest,status}   = useHttp(addQuote)
    const history=useHistory();

    useEffect(() => {
    if(status === 'completed') {
        history.push('/quotes')
    }
    },[status,history])
    const addQuoteHandler = (quoteData) =>{
        const fun =sendRequest(quoteData)
        console.log('fun',fun)
        console.log('quoteData',quoteData)
    }
    return (
       <QuoteForm
           isLoading={status === 'pending'}
           onAddQuote={addQuoteHandler}
       />
    )
}
export default NewQuote
