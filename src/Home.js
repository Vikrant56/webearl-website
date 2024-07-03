import React from "react";
import './Home.css';

// import shoesImage from './images/';
import profImage from './images/Userimg.png';
import nikeImage from './images/nike.png'
import Rectangle from './images/Rectangle.png';
import Group from './images/shoeimg.jpg'
import shoeImage from './images/shoeimg.jpg'


function Home() {
  return (
    <div className="container">
     
      <main className="main">
        <section className="product-details">
          <div className="breadcrumb">
            <a href="/ ">Home</a>
            <span>&gt;</span>
            <a href="/home">Shoes</a>
            <span>&gt;</span>
            <a href="/about"><span>Round toe leather loafer shoe (Black)</span></a>
          </div>
          
           <div  className="new-productcls" style={{display: "flex"}}>
            <div className="product-image">
              <img src={Group} alt="Product" style={{ width: '350px', height: '400px' }} />
              <div className="additional-product-images">
                <img src={Rectangle} alt="Product1" style={{ width: '108.95px', height: '92.12px' }} />
                <img src={Rectangle} alt="Product2" style={{ width: '108.95px', height: '92.12px' }} />
                <img src={Rectangle} alt="Product3" style={{ width: '108.95px', height: '92.12px' }} />
              </div>
            
          </div>
          <div className="product-info">
          <div className="product-details-right">
            <a href="/about"><h2>Round toe leather loafer shoe (Black)</h2></a>
            <button className="wishlist-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514 1.053 1.4 3.053c-1.117 2.002-.203 4.747 2.16 6.071L8 13.25l4.44-3.964c2.363-1.324 3.277-4.069 2.16-6.071C13.486 1.053 10.4.28 8.717 2.011L8 2.748zm0 1.451 3.12-3.02C12.667.718 15.05 1.3 16 2.89c.95 1.59-.116 3.977-2.243 5.253L8 15l-5.757-6.857C.116 6.866-.95 4.48 0 2.89 1.05 1.3 3.333.718 4.88 1.179L8 4.2z" />
              </svg>
              Add to my wishlist
            </button>
            <div className="ProductDetails">
              <ul>
                <li>Occasion: Sport Color: Red </li>
                <li>Size: 12 Type: Running, Womens Shoes</li>
              </ul>
            </div>
            <div className="product-price">
              <ul>
                <li> ₹58.30 <del>₹65.12</del> <button className="Inquiry-btn">Inquiry Now</button></li>

              </ul>
            </div>
            <div className="product-description">
              <h1>Description</h1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...
            </div>
          </div>
        </div>
        </div>
        <div className="supplier-card-container">
          <div className="supplier-card">
            <img src={nikeImage} alt="Supplier" className="supplier-image" />
            <button className="follow-button1">Follow</button>
            <div className="supplier-details">
              <div className="supplier-header">
                <h2>Tab Sport</h2>
                <div className="supplier-rating">
                  <span>4.8</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.396.2-.845-.149-.746-.592L4.58 10.615.502 7.302c-.329-.303-.158-.888.283-.95l4.898-.696L7.538.792c.197-.391.73-.391.927 0l1.855 4.864 4.898.696c.441.062.612.647.283.95l-4.078 3.313 1.713 4.236c.099.443-.35.792-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </div>
              </div>
              <div className="supplier-reviews">13 reviews</div>
              <div className="supplier-address">218/B, Near Mala sheri <br /> Mumbai, Maharastra - 259632</div>
              <div className="supplier-timings"><b>Open Now :</b><br /> Mon - Sun :- 10:30 am - 9:30 pm</div>
              <button className="about-supplier-button">About Supplier</button>
            </div>
          </div>
          <div className="product-specification">
            <h3>Specifications</h3>
            <div className="specifications-card">
              <div className="specifications-list">
                <div>
                  <span>Product model:</span>
                  <span>Model X</span>
                </div>
                <div>
                  <span>Manufacture details:</span>
                  <span>Made in XYZ</span>
                </div>
                <div>
                  <span>Brand:</span>
                  <span>Brand Y</span>
                </div>
                <div>
                  <span>Size:</span>
                  <span>10</span>
                </div>
                <div>
                  <span>Type:</span>
                  <span>Casual</span>
                </div>
                <div>
                  <span>Color:</span>
                  <span>Black</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tittle"><h3 style={{ marginTop: '50px' }}>More from this seller</h3> </div>
        <div className="more-items">
          <div className="item-card">
            <img src={shoeImage} alt="Item" />
            <div className="item-name">Round toe leather loafer shoe (Black)</div>
            <div className="item-info">
              <div className="brand">Rainbow shoes & enterprise</div>
              <div className="prototype">Prototype</div>
              <div className="price">₹ 1800</div>
              <div className="category">
                <span className="label">Category:</span>
                <span className="value">Shoes</span>
              </div>
              <div className="subcategory">
                <span className="label">Subcategory:</span>
                <span className="value">Shoes</span>
              </div>
            </div>
          </div>
          <div className="item-card">
            <img src={shoeImage} alt="Item" />
            <div className="item-name">Round toe leather loafer shoe (Black)</div>
            <div className="item-info">
              <div className="brand">Rainbow shoes & enterprise</div>
              <div className="prototype">Prototype</div>
              <div className="price">₹ 1800</div>
              <div className="category">
                <span className="label">Category:</span>
                <span className="value">Shoes</span>
              </div>
              <div className="subcategory">
                <span className="label">Subcategory:</span>
                <span className="value">Shoes</span>
              </div>
            </div>
          </div>
          <div className="item-card">
            <img src={shoeImage} alt="Item" />
            <div className="item-name">Round toe leather loafer shoe (Black)</div>
            <div className="item-info">
              <div className="brand">Rainbow shoes & enterprise</div>
              <div className="prototype">Prototype</div>
              <div className="price">₹ 1800</div>
              <div className="category">
                <span className="label">Category:</span>
                <span className="value">Shoes</span>
              </div>
              <div className="subcategory">
                <span className="label">Subcategory:</span>
                <span className="value">Shoes</span>
              </div>
            </div>
          </div>
        </div>




        <div className="reviews">
          <div className="title">User reviews on this Supplier</div>

          <div className="review">
            <div className="user-image">
              <img src={profImage} alt="User" />
            </div>
            <div className="review-content">
              <div className="review-header">
                <div className="name">Sama Seth</div>
                <div className="date">2 days ago</div>
              </div>

              <div className="descriptionn">
                <div className="review-title">Easy The most comfortable Shoes</div>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </div>
            </div>
            <div className="rating">
              4.9 <span className="stars">★★★★★</span>
            </div>
          </div>

          <div className="review">
            <div className="user-image">
              <img src={profImage} alt="User" />
            </div>
            <div className="review-content">
              <div className="review-header">
                <div className="name">Sama Seth</div>
                <div className="date">2 days ago</div>
              </div>

              <div className="descriptionn">
                <div className="review-title">Easy The most comfortable Shoes</div>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </div>
            </div>
            <div className="rating">
              4.9 <span className="stars">★★★★★</span>
            </div>
          </div>

          <div className="review">
            <div className="user-image">
              <img src={profImage} alt="User" />
            </div>
            <div className="review-content">
              <div className="review-header">
                <div className="name">Sama Seth</div>
                <div className="date">2 days ago</div>
              </div>

              <div className="descriptionn">
                <div className="review-title">Easy The most comfortable Shoes</div>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </div>
            </div>
            <div className="rating">
              4.9 <span className="stars">★★★★★</span>
            </div>
          </div>
        </div>
      </section>
    </main>
      
    </div >
  );
}

export default Home;
