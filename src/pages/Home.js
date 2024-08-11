
import ProductList from '../components/Products/Products';
function Home (){
    return(
      <>
  <h1 style={{textAlign:'center', margin:'20px 20px'}}>welcome to home page</h1>
              <div className='container' style={{display:'flex' , justifyContent:'space-between' , flexWrap:'wrap'}}>
          
            <ProductList/>
          




        </div>
      </>
          
    )
}

export default Home;