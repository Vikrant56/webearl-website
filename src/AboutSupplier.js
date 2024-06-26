import React from 'react';
import './AboutSupplier.css';
import nikeImage from './images/nike.png';
import shoeImage from './images/shoeimg.jpg';
import profImage from './images/Userimg.png';
import Award from './images/award.png';
const AboutSupplier = () => {
  return (
    <div className="container">
      

      <div className="breadcrumbs">
        <a href="/">Home</a>
        <span>&nbsp; &lt; &nbsp;</span>
        <a href="/home">Shoes</a>
        <span>&nbsp; &lt; &nbsp;</span>
        <a href="/about">Round toe leather loafer shoe (Black)</a>
       
        
      </div>

      <div className="content">
        <div className="left-section">
          <div className="product-image">
            <img src={nikeImage} alt="Product" />
          </div>
          <button className="follow-button">Follow</button>
          <div className="detail">
            <div className="titlee">Tab Sport</div>
            <div className="info">
              <div className="label">Phone Number</div>
              <div className="value">+91-123456789</div>
            </div>
            <div className="info">
              <div className="label">Email ID</div>
              <div className="value">rahul@gmail.com</div>
            </div>
            <div className="info">
              <div className="label">Name</div>
              <div className="value">Rahul Sharma</div>
            </div>
            <div className="info">
              <div className="label">Address</div>
              <div className="value">
                Bhatt Sector
                Gandhinagar
              </div>
            </div>
            <div className="info">
              <div className="label">State</div>
              <div className="value">Gujarat</div>
            </div>
            <div className="info">
              <div className="label">Pincode</div>
              <div className="value">382007</div>
            </div>
            <div className="info">
              <div className="label">Category</div>
              <div className="value">Shoes</div>
            </div>
            <div className="info">
              <div className="label">Subcategory</div>
              <div className="value">Shoes</div>
            </div>
            <div className="info">
              <div className="label">Incubation Center</div>
              <div className="value">Ahmedabad</div>
            </div>
            <div className="info">
              <div className="label">Incubation Center</div>
              <div className="value">Ahmedabad</div>
            </div>
            <div className="info">
              <div className="label">City</div>
              <div className="value">Ahmedabad</div>
            </div>
            <button className="inquiry-button">INQUIRY NOW</button>
          </div>


        </div>

        <div className="right-section">
          <div className="about">
            <div className="ttitle">About Us:</div>
            <div className="descriptioon">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen
              book. It has survived not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised in the 1960s with
              the release of Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including versions of Lorem
              Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the
              1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
              more recently with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </div>
          </div>
          <div className="tittle"><h3>More from this seller</h3> </div>
          <div className="more-productss">

            <div className="productt-card">
              <img src={shoeImage} alt="Productt" />
              <div className="productt-name">Round toe leather loafer shoe (Black)</div>
              <div className="productt-info">
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
            <div className="productt-card">
              <img src={shoeImage} alt="Productt" />
              <div className="productt-name">Round toe leather loafer shoe (Black)</div>
              <div className="productt-info">
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
            <div className="productt-card">
              <img src={shoeImage} alt="Product" />
              <div className="productt-name">Round toe leather loafer shoe (Black)</div>
              <div className="productt-info">
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
        </div>
      </div>
      <div className='newrcr'>
       
        <div className="awards">
          <div className="titllee">Awards</div>
          <div className="award-row">
            <div className="award">
              <img src={Award} alt="Award" />
              <div className="description">
                Bharat Ratna-1 st degree of honour.
              </div>
            </div>
            <div className="award">
              <img src={Award} alt="Award" />
              <div className="description">
                Bharat Ratna-1 st degree of honour.
              </div>
            </div>
            <div className="award">
              <img src={Award} alt="Award" />
              <div className="description">
                Bharat Ratna-1 st degree of honour.
              </div>
            </div>
          </div>
        </div>
        <div className="certificate">
          <div className="titllee">Certificate</div>
          <div className="award-row">
            <div className="award">
              <img src={Award} alt="Award" />
              <div className="description">
                Bharat Ratna-1 st degree of honour.
              </div>
            </div>
            <div className="award">
              <img src={Award} alt="Award" />
              <div className="description">
                Bharat Ratna-1 st degree of honour.
              </div>
            </div>
            <div className="award">
              <img src={Award} alt="Award" />
              <div className="description">
                Bharat Ratna-1 st degree of honour.
              </div>
            </div>
          </div>
        </div >

       
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

      </div>

    </div>
  );
};

export default AboutSupplier;