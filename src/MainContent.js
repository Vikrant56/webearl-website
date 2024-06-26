
// import React from 'react';
// import './MainContent.css';
// import './images/Userimg.png'
// import FilterIcon from "../src/images/FilterIcon.png";
// import Userimg from "../src/images/Userimg.png";



// const MainContent = () => {
//   const shoes = Array(9).fill({
//     name: 'Round toe leather loafer shoe (Black)',
//     price: '₹ 1800',
//     category: 'Shoes',
//     subcategory: 'Shoes',
//     brand: 'Rainbow shoes & enterprise',
//     type: 'Prototype',
//     image: 'https://media.istockphoto.com/id/628210852/photo/sports-shoe.jpg?s=1024x1024&w=is&k=20&c=mo-WJzQ2KiZHi0A96Lx6pgUwRljiIguUczet4jXZoz0='
//   });

//   return (
//     <main className="main-content">
//       <div className="category-card-container">
//         <div className="category-card">
//           <div className="card-header">
//             <span className="all-content">All Content</span>
//             <a href="#" className="view-all">View all</a>
//           </div>
//           <section>
//             <table className="category-table">
//               <tbody>
//                 <tr>
//                   <td>Agriculture</td>
//                   <td>Real estate</td>
//                   <td>Doctors</td>
//                   <td>Beauty & Spa</td>
//                 </tr>
//                 <tr>
//                   <td>Agriculture</td>
//                   <td>Real estate</td>
//                   <td>Doctors</td>
//                   <td>Beauty & Spa</td>
//                 </tr>
//                 <tr>
//                   <td>Agriculture</td>
//                   <td>Real estate</td>
//                   <td>Doctors</td>
//                   <td>Beauty & Spa</td>
//                 </tr>
//               </tbody>
//             </table>
//             <div className="small-cards">
//             <div className="small-card">
//                 <img src={ Userimg} alt="User img" className="profile-image" />
//                 <div className="card-text">
//                   <h4>Maria</h4>
//                   <p className="designation">98 Deals</p>
//                 </div>
//                 <div className="menu-dots">⋮</div>
//               </div>
//               <div className="small-card1">
//                 Post your requirement
//               </div>
//             </div>
//           </section>
//         </div>
//       </div>
//       <div>
//         <h2>All Shoes</h2>
//         <div className="filter-container">
//           <div className="ellipse">
//             <img src={FilterIcon} alt="Filter icon" className="filter-icon" />
//           </div>
//         </div>
//       </div>
//       <div className="shoe-cards">
//         {shoes.map((shoe, index) => (
//           <div className="shoe-card" key={index}>
//             <div className="shoe-image-container">
//               <img src={shoe.image} alt={shoe.name} className="shoe-image" />
//             </div>
//             <button className="like-button">❤️</button>
//             <div className="shoe-info">
//               <h4>{shoe.name}</h4>
//               <p className="brand">{shoe.brand}</p>
//               <div className="type-price">
//                 <span className="type">{shoe.type}</span>
//                 <span className="price">{shoe.price}</span>
//               </div>
//               <hr />
//               <div className="category-info">
//                 <span>{shoe.category}</span>
//                 <span>{shoe.subcategory}</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="pagination">
//   <span class="active">1</span>
//   <span>2</span>
//   <span>3</span>
//   <span>4</span>
//   <span>5</span>
//   <span>&gt;&gt;</span>
// </div>

//     </main>
//   );
// };

// export default MainContent;
import React from 'react';
import './MainContent.css';
import Ellipse1 from "./images/Ellipse1.png";
import Ellipse2 from "./images/Ellipse2.png";
import Ellipse3 from "./images/Ellipse3.png";
import Ellipse4 from "./images/Ellipse4.png";
import Ellipse5 from "./images/Ellipse5.png";
import Ellipse6 from "./images/Ellipse6.png";
import Ellipse7 from "./images/Ellipse7.png";
import Ellipse8 from "./images/Ellipse8.png";
import Ellipse9 from "./images/Ellipse9.png";
import Ellipse10 from "./images/Ellipse10.png";
import Ellipse11 from "./images/Ellipse11.png";
import FilterIcon from "../src/images/FilterIcon.png";
import Userimg from "../src/images/Userimg.png";
import shoeimg from "./images/shoeimg.jpg";

const categories = [
  { name: 'Agriculture', icon: Ellipse1 },
  { name: 'Apparel', icon: Ellipse2 },
  { name: 'Automobiles & Two wheelers', icon: Ellipse3 },
  { name: 'Baby care', icon: Ellipse4 },
  { name: 'Beauty & Personal care', icon: Ellipse5 },
  { name: 'Book', icon: Ellipse6 },
  { name: 'Chemicals', icon: Ellipse7 },
  { name: 'Construction & Real estate', icon: Ellipse8 },
  { name: 'Electrical equipment & supplies', icon: Ellipse9 },
  { name: 'Electronics', icon: Ellipse10 },
  { name: 'Energy', icon: Ellipse11 }
];

const MainContent = () => {
  const shoes = Array(9).fill({
    name: 'Round toe leather loafer shoe (Black)',
    price: '₹ 1800',
    category: 'Shoes',
    subcategory: 'Shoes',
    brand: 'Rainbow shoes & enterprise',
    type: 'Prototype',
    image: shoeimg
  });

  return (
    <main className="main-content">
      
       <div className="app-container">
  <aside className="sidebar">
    <div className="related-categories">
      <div className="categories-header">
        <h3>Related categories</h3>
        <select className="category-select">
          <option >Shoes</option>
        </select>
      </div>
      <input type="text" className="search-bar" placeholder="Search" />
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <img src={category.icon} alt={category.name} className="category-icon" />
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  </aside>
  
 

  <div className="main-content">
    <div className="category-card-container">
      <div className="category-card">
        <div className="card-header">
          <span className="all-content">All Content</span>
          <a href="#" className="view-all">View all</a>
        </div>
        <section>
          <table className="category-table">
            <tbody>
              <tr>
                <td>Agriculture</td>
                <td>Real estate</td>
                <td>Doctors</td>
                <td>Beauty & Spa</td>
              </tr>
              <tr>
                <td>Agriculture</td>
                <td>Real estate</td>
                <td>Doctors</td>
                <td>Beauty & Spa</td>
              </tr>
              <tr>
                <td>Agriculture</td>
                <td>Real estate</td>
                <td>Doctors</td>
                <td>Beauty & Spa</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  </div>
  <div className="small-cards">
    <div className="small-card">
      <img src={Userimg} alt="User img" className="profile-image" />
      <div className="card-text">
        <h4>Maria</h4>
        <p className="designation">98 Deals</p>
      </div>
      <div className="menu-dots">⋮</div>
    </div>
    <div className="small-card1">
      Post your requirement
    </div>
  </div>
</div>



      <div>
        
        {/* <div className="filter-container">
          <div className="ellipse">
            <img src={FilterIcon} alt="Filter icon" className="filter-icon" />
          </div>
        </div> */}
      </div>

      <div className="shoe-cards">
        
        {shoes.map((shoe, index) => (
          <div className="shoe-card" key={index}>
            <div className="shoe-image-container">
              <img src={shoe.image} alt={shoe.name} className="shoe-image" />
            </div>
            <button className="like-button">❤️</button>
            <div className="shoe-info">
              <h4>{shoe.name}</h4>
              <p className="brand">{shoe.brand}</p>
              <div className="type-price">
                <span className="type">{shoe.type}</span>
                <span className="price">{shoe.price}</span>
              </div>
              <hr />
              <div className="category-info">
                <span>{shoe.category}</span>
                <span>{shoe.subcategory}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <span className="active">1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>&gt;&gt;</span>
      </div>

    </main>
  );
};

export default MainContent;
