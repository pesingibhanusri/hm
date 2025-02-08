import { Component } from "react";

class Cards extends Component {
  render() {
    return (
      <>
        {/* Main Image Container */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "400px",
            display: "flex",
            justifyContent: "center",  // Center the image horizontally
            alignItems: "center",      // Center the image vertically
          }}
          className="centered-container"
        >
          <img
            src="https://www2.hm.com/content/dam/global_campaigns/season_01/women/ws11l/WS11L-3x2-1.jpg"
            alt="New Arrivals"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top",
              borderRadius: "10px",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "30%",
              left: "5%",
              color: "white",
              marginBottom: "15px",
            }}
          >
            <p style={{ fontSize: "22px", fontWeight: "bold", margin: "0" }}>
              New Arrivals
            </p>
            <p style={{ fontSize: "18px", marginBottom: "10px" }}>
              In focus: Neutral tones
            </p>
            <button>Shop Now</button>
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "30%",
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "18px",
              textAlign: "center",
            }}
          >
            <p style={{ color: "red" }}>
              Rs.3,399.00{" "}
              <span
                style={{
                  textDecoration: "line-through",
                  color: "white",
                  marginLeft: "10px",
                }}
              >
                Rs.3,999.00
              </span>
            </p>
            <p style={{ fontWeight: "bold", color: "white" }}>
              Double-breasted Twill
            </p>
          </div>
        </div>

        <br />

        {/* Second Image Container */}
        <div
  style={{
    position: "relative",  // Add relative positioning to the container
    width: "100%",
    height: "350px",  // Set height for the container to fit the image
  }}
  className="centered-container "
>
  <img
    src="https://image.hm.com/content/dam/global_campaigns/season_01/men/start-page-assets/w6/MS11E6-16x9-Startpage-Teaser-1-w6.jpg?imwidth=1920"
    height="350px"
    width="100%"
    style={{ borderRadius: "10px" }}
  />
  
  <div
    style={{
      position: "absolute",
      bottom: "30%",
      left: "5%",
      color: "white",
      marginBottom: "15px",
    }}
  >
    <p style={{ fontSize: "22px", fontWeight: "bold", margin: "0" }}>
      Denim roundup
    </p>
    <p style={{ fontSize: "18px", marginBottom: "10px" }}>
      Get to know the fit. A quick guide to signature jeans styles.
    </p>
    <button>Shop Now</button>
  </div>

  {/* Price Text */}
  <p
    style={{
      position: "absolute",  // Position it absolutely relative to the container
      bottom: "10%",         // Adjust the vertical position
      left: "5%",            // Adjust the horizontal position
      color: "red", 
      marginBottom: "0",     // Remove the extra margin-bottom
    }}
  >
    Rs.3,399.00{" "}
    <span
      style={{
        textDecoration: "line-through",
        color: "red",
        marginLeft: "10px",
      }}
    >
      Rs.3,999.00
    </span>
  </p>
</div>


        <br />

        {/* Other Images and Content */}
        <div className="centered-container">
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQkMox8F8bWFRAK8npp15pigjAuJHOkZOJWomH_SXr6u7-7z8tb"
            height="350px"
            width="100%"
            style={{ borderRadius: "10px" }}
          />
        </div>


        

        <h1 style={{ textAlign: "center" }}>Men Bestsellers</h1>

        {/* Product Images */}
        <div className="image-gallery">
          {[
            "https://lp2.hm.com/hmgoepprod?set=source[/0a/11/0a11415d425a0f392d6fec669790b7181e53d24f.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]",
            "https://lp2.hm.com/hmgoepprod?set=source[/fd/89/fd899f78ad10cff9c646403adcd29615433d9639.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]",
            "https://lp2.hm.com/hmgoepprod?set=source[/d3/5c/d35c622819e98c67f3442c9e4dc46771a189a9ea.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]",
            "https://lp2.hm.com/hmgoepprod?set=source[/4b/d8/4bd8c80dd644e791b8c9329bd51f8fda1d6e34a6.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]",
            "https://lp2.hm.com/hmgoepprod?set=source[/53/35/533592851b5f517dcbbc392d8d0fe9fe238b9ba4.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]",
          ].map((img, index) => (
            <img key={index} src={img} height="150px" width="150px" />
          ))}
        </div>

        <br /><br />

        <div
  style={{
    position: "relative",  // Add relative positioning to the container
    width: "100%",
    height: "350px",  // Set height for the container to fit the image
  }}
  className="centered-container"
>
  <img
    src="https://www2.hm.com/content/dam/global_campaigns/season_01/baby/4031c/4031C-1x1-baby-meet-denim.jpg"
    height="350px"
    width="100%"
    style={{ borderRadius: "10px" }}
  />
  
  <div
    style={{
      position: "absolute",
      bottom: "30%",
      left: "15%",
      color: "white",
      marginBottom: "15px",
    }}
  >
    <p style={{ fontSize: "22px", fontWeight: "bold", margin: "0" }}>
      Baby meets denim
    </p>
    <p style={{ fontSize: "18px", marginBottom: "10px" }}>
      Frills, florals and blues
    </p>
    <button>Shop Now</button>
  </div>

  {/* Price Text */}
  <p
    style={{
      position: "absolute",  // Position it absolutely relative to the container
      bottom: "40%",         // Adjust the vertical position
      left: "60%",            // Adjust the horizontal position
      color: "red", 
      marginBottom: "0",
    }}
  >
    Rs.3,399.00{" "}
    <span
      style={{
        textDecoration: "line-through",
        color: "red",
        marginLeft: "20px",
      }}
    >
      Rs.3,999.00
    </span>
  </p>
</div>


        <br /><br />

        <div className="centered-container" style={{ position: "relative" }}>
  <img
    src="https://image.hm.com/assets/hm/c8/dc/c8dca9e2941e6b45efcc58fa396d104adefd5749.jpg?imwidth=768"
    height="350px"
    width="100%"
    style={{ borderRadius: "10px" }}
  />
  
  <div
    style={{
      position: "absolute",
      bottom: "30%",  // Adjusting the vertical position
      left: "5%",
      color: "white",
      marginBottom: "15px",
    }}
  >
    <h1 style={{ fontSize: "22px", fontWeight: "bold", margin: "0" }}>
      In focus: Stripes
    </h1>
    <button>Shop Now</button>
  </div>

  <p
    style={{
      position: "absolute",  // Position it absolutely relative to the container
      bottom: "60%",         // Adjust the vertical position
      left: "60%",           // Adjust the horizontal position (centered)
      transform: "translateX(-50%)", // To truly center it
      color: "red", 
      marginBottom: "0",
    }}
  >
    Rs.3,399.00{" "}
    <span
      style={{
        textDecoration: "line-through",
        color: "red",
        marginLeft: "20px",
      }}
    >
      Rs.3,999.00
    </span>
  </p>
</div>
<br></br><br></br>
<div className="centered-container " style={{ height: "200px", width: "100%", backgroundColor: "grey" }}>
    <h2>Ladies Sportswear: The ultimate bestsellers</h2><br></br>
    <h5>Explore the collection</h5>
    </div>


        <br /><br />

        <div className="centered-container" style={{ position: "relative" }}>
  <img
    src="https://www2.hm.com/content/dam/global_campaigns/season_01/home/7011b/7011B-3x2-1.jpg"
    height="350px"
    width="100%"
    style={{ borderRadius: "10px" }}
  />
  <div
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)", // Centers the text both horizontally and vertically
      color: "white",
      fontSize: "22px",
      fontWeight: "bold",
    }}
  >
    A bedroom refresh<br></br>
    <button>Shop Now</button>
  </div>
</div>

      </>
    );
  }
}

export default Cards;
