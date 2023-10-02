import React from 'react';
import '../styles/SearchStyle.css'
const SearchBar = ({ onSearch }) => {
  return (
    <>
    <div style={{display:"flex"}}>
    <div className="search-bar">
      <input type="text" style={{width:"250px", height:"27px", marginTop:"11px", marginLeft:"30px"}} placeholder="Search cars..." onChange={(e) => onSearch(e.target.value)}/>
    </div>
      <div className="search-bar">
      <input type="text" style={{width:"250px", height:"27px", marginTop:"11px", marginLeft:"-185px"}} placeholder="All Brands" onChange={(e) => onSearch(e.target.value)} />
    </div>
    </div>
    </>
  );
};

export default SearchBar;

// import React from 'react';
// import { Search as SearchIcon } from '@material-ui/icons';
// import '../styles/SearchStyle.css';

// const SearchBar = ({ onSearch }) => {
//   return (
//     <div className="search-container">
//       <div className="search-bar">
//         <input
//           type="text"
//           style={{ width: '250px', height: '27px', marginTop: '11px', marginLeft: '18px' }}
//           placeholder="Search cars..."
//           onChange={(e) => onSearch(e.target.value)}
//         <SearchIcon style={{ marginRight: '10px' }} />
//         />
//       </div>
//       <div className="search-bar">
//         <SearchIcon style={{ marginRight: '10px' }} />
//         <input
//           type="text"
//           style={{ width: '250px', height: '27px', marginTop: '11px', marginLeft: '-185px' }}
//           placeholder="All Brands"
//           onChange={(e) => onSearch(e.target.value)}
//         />
//       </div>
//     </div>
//   );
// };

// export default SearchBar;

