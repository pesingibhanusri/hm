import { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <><br></br><br></br>
        <div className="footer" style={{ display: "flex", justifyContent: "space-between", gap: "20px",margin:"auto" }}>
          <div>
            <ul style={{ listStyleType: "none", padding: 0 ,color:"black"}}>
              <p>Shop</p>
              <li><a href="#">Ladies</a></li>
              <li><a href="#">About H&M GROUP</a></li>
              <li><a href="#">Baby</a></li>
              <li><a href="#">Kids</a></li>
              <li><a href="#">Home</a></li>
              <li><a href="#">Magazine</a></li>
            </ul>
          </div>

          <div>
            <ul style={{ listStyleType: "none", padding: 0  }}>
              <p>Corporate Info</p>
              <li><a href="#">Career at H&M</a></li>
              <li><a href="#">About H&M GROUP</a></li>
              <li><a href="#">Sustainability H&M Group</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Investor relations</a></li>
              <li><a href="#">Corporate governance</a></li>
            </ul>
          </div>

          <div>
            <ul style={{ listStyleType: "none", padding: 0 }}>
            <p>Help</p>
              <li><a href="#">Customer Service</a></li>
              <li><a href="#">My H&M</a></li>
              <li><a href="#">Find a store</a></li>
              <li><a href="#">Legal & Privacy</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Secure Shopping</a></li>
              <li><a href="#">Cookie Notice</a></li>
              <li><a href="#">Cookie Settings</a></li>
            </ul>
          </div>

          <div>
            <p>Sign up now and be the first to know<br></br>about exclusive offers, latest fashion<br></br> news & style tips!</p>
            <a href="#">Read More</a>
          </div>
        </div>
        <br></br>
        <div style={{
  display: "flex", 
  justifyContent: "center", 
  gap: "15px", 
  marginTop: "20px"
}}>
            <img src="https://static.vecteezy.com/system/resources/previews/014/414/683/non_2x/instagram-black-logo-on-transparent-background-free-vector.jpg" height="60px" width="60px"></img>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS2bHm2iixjz0Awt8PnvW_-cnrLSjXmQVW1Q&s" height="60px" width="60px"></img>
            <img src="https://as1.ftcdn.net/jpg/06/04/69/00/1000_F_604690075_pYIo1cOVyZQkNfxsVVcpRdGApDYCGvmM.jpg" height="60px" width="60px"></img>
            <img src="https://i.pinimg.com/736x/57/f2/c0/57f2c0e905c438c3f3bd6c8684441fb8.jpg" height="60px" width="60px"></img>
            <img src="https://cdn.pixabay.com/photo/2015/08/11/12/32/facebook-884378_1280.png" height="60px" width="60px"></img>
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Black.png" height="60px" width="60px"></img>

            </div>

<div style={{
  display: "flex", 
  justifyContent: "center", 
  gap: "15px", 
  marginTop: "20px"
}}>
<p>The content of this site is copyright-protected and is the property of H & M Hennes & Mauritz AB.</p><br></br>
</div> <div style={{
  display: "flex", 
  justifyContent: "center", 
  gap: "15px", 
  marginTop: "20px"
}} >
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1064px-H%26M-Logo.svg.png" height="60px" width="60px"/>
    </div>

<div style={{
  display: "flex", 
  justifyContent: "center", 
  gap: "15px", 
  marginTop: "20px"
}}>
    <a>INDIA | Rs.</a>
    </div>
      </>
    );
  }
}

export default Footer;
