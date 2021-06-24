import './index.css';
import data from './data.js'
import Product from './components/Product';
function App() {
  return (
    <div className="grid-container" >
      <header className="row">
        <div>
          <a className="brand">amazona</a>
        </div>
        <div>
          <a href="cart.html">Cart</a>
          <a href="sighin.html">Sigh In</a>
        </div>
      </header>
      <main>
        <div className="row center">
          {data.products.map((product) => (
            <Product product={product}></Product>
          ))}
        </div>
      </main>
      <footer className="row center">
        All Right preserved
      </footer>
    </div >
  );
}

export default App;
