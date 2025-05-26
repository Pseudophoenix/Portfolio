import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Resizable } from 'react-resizable';
import Draggable from 'react-draggable';
import 'react-resizable/css/styles.css';
import './OverlayEditor.css';

function OverlayEditor() {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [size, setSize] = useState({ width: 500, height: 500 });
  const [isDraggable, setIsDraggable] = useState(true);
  const draggableRef = useRef(null);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = (event, { size }) => {
    setSize({ width: size.width, height: size.height });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically save to your backend
    console.log({ title, content });
    toggleOverlay();
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 300
      }
    },
    exit: { opacity: 0, scale: 0.8 }
  };

  return (
    <div className="app-container">
      {/* Main page content */}
      <button onClick={toggleOverlay} className="edit-button">
        Edit Blog
      </button>
      
      <div className={`main-content ${isOpen ? 'blurred' : ''}`}>
        <h1>My Blog Page</h1>
        <p>This is your main page content that will be blurred when the overlay is open.</p>
      </div>

      {/* Overlay and modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              className="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleOverlay}
            ></motion.div>
            
            <Draggable 
              handle=".modal-header"
              cancel=".react-resizable-handle, textarea, input, button"
              disabled={!isDraggable}
              nodeRef={draggableRef}
            >
              <div ref={draggableRef}>
                <Resizable
                  width={size.width}
                  height={size.height}
                  onResize={handleResize}
                  minConstraints={[300, 300]}
                  maxConstraints={[800, 800]}
                >
                  <motion.div
                    className="edit-modal"
                    style={{ width: size.width + 'px', height: size.height + 'px' }}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={modalVariants}
                  >
                    <div className="modal-header">
                      <h2>Edit Blog Post</h2>
                      <div className="header-controls">
                        <label className="drag-toggle">
                          <input 
                            type="checkbox" 
                            checked={isDraggable} 
                            onChange={() => setIsDraggable(!isDraggable)} 
                          />
                          Draggable
                        </label>
                        <button onClick={toggleOverlay} className="close-button">
                          &times;
                        </button>
                      </div>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="edit-form">
                      <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Blog title..."
                        className="title-input"
                        required
                      />
                      <textarea
                        className="edit-content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Write your blog content here..."
                        required
                      />
                      <div className="modal-footer">
                        <button 
                          type="button" 
                          onClick={toggleOverlay} 
                          className="cancel-button"
                        >
                          Cancel
                        </button>
                        <button type="submit" className="save-button">
                          Save Changes
                        </button>
                      </div>
                    </form>
                  </motion.div>
                </Resizable>
              </div>
            </Draggable>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default OverlayEditor;