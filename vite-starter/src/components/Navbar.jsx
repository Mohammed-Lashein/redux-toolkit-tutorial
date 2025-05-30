import { useSelector } from 'react-redux';
import { CartIcon } from '../icons';

function Navbar() {
  const {amount} = useSelector((store) => store.mobilePhonesCart)
  
  return (
  <nav>
    <div className="nav-center">
      <h3>RTK</h3>
      {/* Remember our work on the ecommerce task, not putting the icon in a div
      resulted in a lot of headaches when we
      wanted to align the cart icon within the nav . 
      
      This emphasizes the importance of nav-container class*/}
      <div className="nav-container">
        <CartIcon />
        {/* 
        Another amazing thing . In the last ecommerce project, I had a problem where
        the amount circle was floating on screen resize . 
        We didn't have this issue here since the cart icon is wrapped in a container,
        so the items count bubble will always be relative to that container
        */}
        <div className="amount-container">
          <p className="total-amount">{amount}</p>
        </div>
      </div>
    </div>
   </nav>
  )
}
export default Navbar