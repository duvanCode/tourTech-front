import './../../boostrap.css';
import'./Search.css';
import cart from './../../assets/images/cart-fill.svg';


function Search() {
  return (
    <section>
    <div className="container d-flex ">
            <div className="search my-3 ">
                <p className="my-0">Buscar</p><input placeholder="Tu búsqueda, nuestra mejor selección tecnológica." type="text" className="mx-2 w-75 search-input"/>
        </div>
        <div className="d-none d-md-flex justify-content-center align-items-center w-25 botom-selected my-3">
            <img src={cart} />
        </div>
      </div>
  </section>
  );
}

export default Search;