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
import "./Blog.css";
import React, { useState, useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import axios from 'axios';

const BlogCard = ({ isNavBarClosed, setIsNavBarClosed }) => {
  const location = useLocation();
  const isActive = location.pathname === '/blog';
  const [htmlCode, setHtmlCode] = useState('<h1>My Blog Post</h1>\n<p>Write your content here...</p>');
  const [cssCode, setCssCode] = useState('h1 { color: #333; }\np { font-size: 16px; line-height: 1.6; }');
  const [title, setTitle] = useState('My Blog Post');
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch blogs on component mount
  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/blogs'); // Replace with your actual API endpoint
      setBlogs(response.data);
      setBlogs([{title:"sad",html:"asd",css:"asd"}]);
      setError('');
    } catch (err) {
      setError('Failed to fetch blogs');
      setBlogs([{title:"sad",html:"asd",css:"asd"}]);
      console.error('Error fetching blogs:', err);
    } finally {
      setLoading(false);
    }
  };

  const saveBlog = async () => {
    try {
      setLoading(true);
      await axios.post('/api/blogs', { // Replace with your actual API endpoint
        title,
        html: htmlCode,
        css: cssCode,
        createdAt: new Date().toISOString()
      });
      // Reset editor after save
      setHtmlCode('<h1>My Blog Post</h1>\n<p>Write your content here...</p>');
      setCssCode('h1 { color: #333; }\np { font-size: 16px; line-height: 1.6; }');
      setTitle('My Blog Post');
      // Refresh the blog list
      await fetchBlogs();
      alert('Blog saved successfully!');
    } catch (err) {
      setError('Failed to save blog');
      console.error('Error saving blog:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`card ${isActive ? 'card-visible' : ''}`}>
      <div className='card-header' style={{ background: '#ff0dff', '--clr': '#ff0dff' }}>
        <h2>Blog Editor</h2>
        <NavLink to="/" className={isNavBarClosed ? 'cross-button-closed' : 'cross-button-open'} onClick={() => setIsNavBarClosed(!isNavBarClosed)}>
          <FaBars />
        </NavLink>
      </div>
      <div className='card-body'>
        <div className="blog-editor-container">
          <div className="blog-controls">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Blog post title"
              className="blog-title-input"
            />
            <button onClick={saveBlog} className="save-button" disabled={loading}>
              {loading ? 'Saving...' : 'Save Blog'}
            </button>
          </div>
          
          <div className="blog-editor-columns">
            <div className="editor-column">
              <h3>HTML Editor</h3>
              <textarea
                value={htmlCode}
                onChange={(e) => setHtmlCode(e.target.value)}
                className="code-editor html-editor"
                spellCheck="false"
              />
            </div>
            
            <div className="editor-column">
              <h3>CSS Editor</h3>
              <textarea
                value={cssCode}
                onChange={(e) => setCssCode(e.target.value)}
                className="code-editor css-editor"
                spellCheck="false"
              />
            </div>
            
            <div className="preview-column">
              <h3>Live Preview</h3>
              <div className="blog-preview">
                <iframe
                  title="blog-preview"
                  srcDoc={`
                    <!DOCTYPE html>
                    <html>
                    <head>
                      <style>${cssCode}</style>
                    </head>
                    <body>
                      ${htmlCode}
                    </body>
                    </html>
                  `}
                  className="preview-iframe"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Section */}
        <div className="blog-posts-section">
          <h2>Saved Blog Posts</h2>
          {error && <div className="error-message">{error}</div>}
          {loading && blogs.length === 0 ? (
            <div>Loading blogs...</div>
          ) : (
            <div className="blog-posts-grid">
              {blogs.map((blog) => (
                <div key={blog._id} className="blog-post-card">
                  <h3>{blog.title}</h3>
                  <div className="blog-post-preview">
                    <iframe
                      title={`blog-preview-${blog._id}`}
                      srcDoc={`
                        <!DOCTYPE html>
                        <html>
                        <head>
                          <style>${blog.css}</style>
                        </head>
                        <body>
                          ${blog.html}
                        </body>
                        </html>
                      `}
                    />
                  </div>
                  <div className="blog-post-meta">
                    <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;