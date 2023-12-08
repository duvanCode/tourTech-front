import './../../boostrap.css';
import'./Body.css';
import Products from "./../Product/Product";
import Filters from "./../Filters/Filters";


function Body() {
  return (
        <section>
            <div className="container">
                <div className="col-12">
                    <p>Home</p>
                </div>
                <div className="row justify-content-center">
                    <div className="row col col-sm-12 col-md-8">
                        <Products/>
                    </div>
                    <div className="col d-none d-md-block col-md-4 px-4">
                        <Filters/>
                    </div>
                </div>
            </div>
        </section>
  );
}

export default Body;