import {useParams} from 'react-router-dom'
const ProductListPage = () => {
    const params = useParams()
    console.log('params',params)
    return (
        <div>
            <h1>Product List page:{params?.pId}</h1>
        </div>
    )
}
export default ProductListPage
