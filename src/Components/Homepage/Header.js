import DateTimeDisplay from "./DateTimeDisplay";
import { useState } from 'react';




const Header = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseOver = (index) => {
      setHoveredIndex(index);
    };
  
    const handleMouseOut = () => {
      setHoveredIndex(null);
    };

    
    return (
        <>
  



            {/* NEW HEADER */}
            <div className="container">
                <div className="row">
                  
                        <div className="col-lg-5">
                            <div className="start-head">
<DateTimeDisplay/>
<h2>Let's Start</h2>
                            </div>
                        </div>

<div className="col-lg-2">
    <div className="header-logo">
    <div className="social-icons">
      <a
        className={`social-icon dribbble ${hoveredIndex !== null && hoveredIndex !== 0 && 'blurred'}`}
        href="https://twitter.com/somebigname"
        rel="noreferrer"
        target="_blank"
        onMouseOver={() => handleMouseOver(0)}
        onMouseOut={handleMouseOut}
      >
        <i className="fab fa-twitter"></i>
      </a>
      <a
        className={`social-icon dribbble ${hoveredIndex !== null && hoveredIndex !== 1 && 'blurred'}`}
        href="https://youtube.com/@Somebigname?si=MJtCBGtE2k2ExEqk"
        rel="noreferrer"
        target="_blank"
        onMouseOver={() => handleMouseOver(1)}
        onMouseOut={handleMouseOut}
      >
        <i className="fab fa-youtube"></i>
      </a>

      <a
        className={`social-icon dribbble ${hoveredIndex !== null && hoveredIndex !== 2 && 'blurred'}`}
        href="https://www.instagram.com/somebigname.india?igsh=eG91YnRtbXg4Nnoz"
        rel="noreferrer"
        target="_blank"
        onMouseOver={() => handleMouseOver(2)}
        onMouseOut={handleMouseOut}
      >
        <i className="fab fa-instagram"></i>
      </a>
    </div>
    </div>
</div>

<div className="col-lg-5">
                            <div className="start-head touch">
<h3>&#123;Email: Hi@somebigname.com&#125;</h3>
<h2>Get in Touch</h2>
                            </div>
                        </div>
                    </div>
              
            </div>
        </>
    )


}

export default Header;