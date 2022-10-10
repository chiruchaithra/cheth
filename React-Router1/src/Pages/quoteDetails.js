import {useParams,Route,Link} from 'react-router-dom'
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
const DUMMY_QUOTES = [
    {id:'q1',author:'chaithra',text:'learn react'},
    {id:'q2',author:'chaithraCheth',text:'learn react'}
]
const QuoteDetail = () => {
    const params = useParams();
    const quote = DUMMY_QUOTES.find(quote => quote.id === params?.quoteId)
    console.log('quote',quote)
    if(!quote) {
        return <p>No quote found!!</p>
    }
    return (
        <>
            <h1> quotes details</h1>
            <HighlightedQuote
                text={quote.text}
                author={quote.author}
            />
            <Route path={`/quotes/${params?.quoteId}`} exact>
                <div className="centered">
                    <Link clasname="btn--flat" to={`/quotes/${params?.quoteId}/comments`}>Comment</Link>
                </div>
            </Route>
            <Route path={`/quotes/${params?.quoteId}/comments`}><Comments /></Route>
        </>
    )
}
export default QuoteDetail
