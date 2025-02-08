import { Component } from "react";

class Header extends Component {
  render() {
    return (
      <>
        <div className="header">
          <div className="header1">
            <p>Sustainability</p>
            <p>Customer Service</p>
            <p>Newsletter</p>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1064px-H%26M-Logo.svg.png" 
              height="60px" 
              width="60px" 
              alt="H&M Logo"
            />
          </div>

          <div className="header2">
            {/* Fixed the incorrect img usage */}
            <div>
              <img 
                src="https://cdn-icons-png.flaticon.com/512/6681/6681221.png" 
                height="50px" 
                width="50px" 
                alt="User Icon"
              />
              <p>sign in</p>
            </div>
            <div>
            <img 
              src="https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png" 
              height="50px" 
              width="50px" 
              alt="Search Icon"
            />

             <p>search</p>
</div>
<div>
             <img 
              src="https://images.vexels.com/media/users/3/137310/isolated/preview/cf5a1b0cf2ebd6f2d7f707ff9317495e-stroke-heart-logo.png" 
              height="50px" 
              width="50px" 
              alt="favorites"
            />
             <p>Favourites</p>

             </div>
             <div>

            <img 
              src="https://static.vecteezy.com/system/resources/thumbnails/004/798/846/small/shopping-cart-logo-or-icon-design-vector.jpg" 
              height="50px" 
              width="50px" 
              alt="Shopping Cart"
            />
             <p>Shopping Cart</p>
          </div>
        </div>
        </div>


        <ul className="list">
            <li>Ladies</li>
            <li>Men</li>
            <li>Baby</li>
            <li>Home</li>
            <li>Sale</li>
        </ul>


        <ul className="list1">
            <li>Use code: HMFREESHIP to get free shipping today</li>
            <li>Free & flexible 15 days return

</li>
          
            <li>Estimated delivery time: 2-7 days

</li>
           
        </ul>

<div className="offer"
><p>Exclusive offer: FREE SHIPPING for 24 hours!
Use code: HMFREESHIP</p></div>
<br></br>


      </>
    );
  }













}

export default Header;
