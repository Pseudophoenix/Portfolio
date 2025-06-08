// import React, { useState } from 'react';
// import { useLocation, NavLink } from 'react-router-dom';
// import { FaBars } from 'react-icons/fa';
// import "./Blog.css";
// const BlogCard = ({ isNavBarClosed, setIsNavBarClosed }) => {
//   const location = useLocation();
//   const isActive = location.pathname === '/blog';
//   const [htmlCode, setHtmlCode] = useState('<h1>My Blog Post</h1>\n<p>Write your content here...</p>');
//   const [cssCode, setCssCode] = useState('h1 { color: #333; }\np { font-size: 16px; line-height: 1.6; }');
//   const [title, setTitle] = useState('My Blog Post');

//   const handleRender = () => {
//     // This function is called whenever the code changes
//     // The rendering happens automatically through the iframe's srcDoc
//   };

//   return (
//     <div className={`card ${isActive ? 'card-visible' : ''}`}>
//       <div className='card-header' style={{ background: '#ff0dff', '--clr': '#ff0dff' }}>
//         <h2>Blog Editor</h2>
//         <NavLink to="/" className={isNavBarClosed ? 'cross-button-closed' : 'cross-button-open'} onClick={() => setIsNavBarClosed(!isNavBarClosed)}>
//           <FaBars />
//         </NavLink>
//       </div>
//       <div className='card-body'>
//         <div className="blog-editor-container">
//           <div className="blog-controls">
//             <input
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               placeholder="Blog post title"
//               className="blog-title-input"
//             />
//             <button onClick={handleRender} className="render-button">
//               Update Preview
//             </button>
//           </div>

//           <div className="blog-editor-columns">
//             <div className="editor-column">
//               <h3>HTML Editor</h3>
//               <textarea
//                 value={htmlCode}
//                 onChange={(e) => setHtmlCode(e.target.value)}
//                 className="code-editor html-editor"
//                 spellCheck="false"
//               />
//             </div>

//             <div className="editor-column">
//               <h3>CSS Editor</h3>
//               <textarea
//                 value={cssCode}
//                 onChange={(e) => setCssCode(e.target.value)}
//                 className="code-editor css-editor"
//                 spellCheck="false"
//               />
//             </div>

//             <div className="preview-column">
//               <h3>Live Preview</h3>
//               <div className="blog-preview">
//                 <iframe
//                   title="blog-preview"
//                   srcDoc={`
//                     <!DOCTYPE html>
//                     <html>
//                     <head>
//                       <style>${cssCode}</style>
//                     </head>
//                     <body>
//                       ${htmlCode}
//                     </body>
//                     </html>
//                   `}
//                   className="preview-iframe"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogCard;