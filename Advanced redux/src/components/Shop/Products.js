import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Dummy_Products = [
    {id:'p1',price:10,name:'react',description:'react.....'},
    {id:'p2',price:9,name:'react1',description:'react1.....'},
    // {id:'p3',price:8,name:'react2',description:'react2.....'},
    // {id:'p4',price:7,name:'react3',description:'react3.....'}
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
          {Dummy_Products.map((product) => (
              <ProductItem
                  id={product.id}
                  key={product.id}
                  title={product.name}
                  price={product.price}
                  description={product.description}
              />
          ))}

      </ul>
    </section>
  );
};

export default Products;
