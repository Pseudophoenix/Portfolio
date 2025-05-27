import "./Blog.css";
import { motion, AnimatePresence } from 'framer-motion';
import { useRef } from "react";
import { Resizable } from 'react-resizable';
import Draggable from 'react-draggable';
// import 'react-resizable/css/styles.css';
import React, { useState, useEffect } from 'react';
import { useLocation, NavLink, redirect } from 'react-router-dom';
import { FaBars, FaEdit, FaTrash } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const BlogCard = ({ isNavBarClosed, setIsNavBarClosed }) => {
  const location = useLocation();
  const isActive = location.pathname === '/blog';
  const [htmlCode, setHtmlCode] = useState('<h1>My Blog Post</h1>\n<p>\n\tWrite your content here...\n</p>');
  const [cssCode, setCssCode] = useState(
    'h1 { color: #333; font-family: "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; }\n' +
    'p { font-size: 16px; line-height: 1.6; font-family: "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; }'
  );
  const [title, setTitle] = useState('My Blog Post');
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [modalSize, setModalSize] = useState({ width: 700, height: 600 });
  const [isDraggable, setIsDraggable] = useState(false);
  const draggableRef = useRef(null);
  // Fetch blogs on component mount
  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:3000/api/blogs'); // Replace with your actual API endpoint
      console.log(response.data.blogs);
      setBlogs(response.data.blogs);
      // setBlogs([{title:"sad",html:"asd",css:"asd"}]);
      setError('');
    } catch (err) {
      setError('Failed to fetch blogs');
      // setBlogs([{ title: "sad", html: "asd", css: "asd" }]);
      console.error('Error fetching blogs:', err);
    } finally {
      setLoading(false);
    }
  };
  // const editBlog = async (blog) => {
  //   // // console.log(id);
  //   // try {
  //   //   setHtmlCode(blog.html);
  //   //   setCssCode(blog.css);
  //   //   setTitle(blog.title);
  //   //   const respone = await axios.put('http://localhost:3000/api/blog', { data: blog });
  //   //   console.log(respone);
  //   //   fetchBlogs();
  //   // }
  //   // catch (err) {
  //   //   setError(err);
  //   // }

  // }
  const editBlog = async (blog) => {
    setEditingBlog(blog);
    setHtmlCode(blog.html);
    setCssCode(blog.css);
    setTitle(blog.title);
    setIsEditorOpen(true);
  };
  const deleteBlog = async (id) => {
    // console.log(id);
    try {
      const respone = await axios.delete('http://localhost:3000/api/blog', { data: { blogId: id } });
      console.log(respone);
      fetchBlogs();
    }
    catch (err) {
      setError(err);
    }
  }
  const saveBlog = async () => {
    try {
      setLoading(true);
      await axios.post('http://localhost:3000/api/blog', { // Replace with your actual API endpoint
        title,
        html: htmlCode,
        css: cssCode,
        // createdAt: new Date().toISOString()
      });
      // Reset editor after save
      setHtmlCode('<h1>My Blog Post</h1>\n<p>\n\tWrite your content here...\n</p>');
      setCssCode('h1 { color: #333; font-family: "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; }\n' +
        'p { font-size: 16px; line-height: 1.6; font-family: "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; }');
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
        <AnimatePresence>
          {isEditorOpen && (
            <>
              <motion.div
                className="overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsEditorOpen(false)}
              >
                <motion.div
                  className="edit-modal"
                  style={{
                    width: modalSize.width + 'px',
                    height: modalSize.height + 'px'
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                >
                  <div className="modal-header">
                    <h2>Edit Blog: {editingBlog?.title}</h2>
                    <div className="header-controls">
                      {/* <label className="drag-toggle">
                        <input
                          type="checkbox"
                          checked={isDraggable}
                          onChange={() => setIsDraggable(!isDraggable)}
                        />
                        Draggable
                      </label> */}
                      <button onClick={() => setIsEditorOpen(false)} className="close-button">
                        &times;
                      </button>
                    </div>
                  </div>

                  <div className="blog-editor-container" style={{ height: 'calc(100% - 60px)' }}>
                    <div className="blog-controls">
                      <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Blog post title"
                        className="blog-title-input"
                      />
                      <button
                        onClick={async () => {
                          try {
                            const response = await axios.put('http://localhost:3000/api/blog', {
                              data: {
                                id: editingBlog.id,
                                title,
                                html: htmlCode,
                                css: cssCode
                              }
                            });
                            console.log(response);
                            fetchBlogs();
                            setIsEditorOpen(false);
                          } catch (err) {
                            setError(err);
                          }
                        }}
                        className="save-button"
                        disabled={loading}
                      >
                        {loading ? 'Saving...' : 'Update Blog'}
                      </button>
                    </div>

                    <div className="blog-editor-columns" style={{ height: 'calc(100% - 50px)' }}>
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
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
        {/* Blog Posts Section */}
        <div className="blog-posts-section">
          <h2>Saved Blog Posts</h2>
          {error && <div className="error-message">{error}</div>}
          {loading && blogs.length === 0 ? (
            <div>Loading blogs...</div>
          ) : (
            <div className="blog-posts-grid">
              {blogs.map((blog) => (
                <div key={blog.id} className="blog-post-card">
                  <div className="blog-post-card-top-bar">
                    <h2 onClick={() => {
                      deleteBlog(blog.id);
                    }}><FaTrash color="white" /></h2>
                    <h2 onClick={() => {
                      editBlog(blog.id);
                    }}><FaEdit color="white" /></h2>

                    <h3>{blog.title}</h3>
                  </div>
                  <div className="blog-post-preview">
                    <iframe
                      title={`blog-preview-${blog.id}`}
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