import { useState } from 'react';

const Footer =()=>{

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseOver = (index) => {
      setHoveredIndex(index);
    };
  
    const handleMouseOut = () => {
      setHoveredIndex(null);
    };
    return(
        <>
        <section id="main_footer">
            <div className="container first_cont">
            <div className="main_form">
                    <div className="row">
                      
                        <div className="col-lg-6">
                        <div className="footer_form">
                        <p>&#123; Don't You Worry, We won't Spam You &#125;</p>
                        <h2>What are you waiting<br/>
                        For? <span className="do">Let's Do This</span>
                        </h2>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="ticket">
                            <img src={"images/ticket.png"}/>
                        </div>

                        <div className="input_form">
                            <input type="text" placeholder="{ 01 }        YOUR NAME"/><br/>    
                            <input type="email" placeholder="{ 02 }       YOUR WORKING MAIL"/>
                            <textarea className="form-control" rows="5" placeholder="{ 03 }        Tell us about your Project and above all your Problem cause that’s where it all Starts...." required></textarea>

                            <button className="submit-btn">Here we go! Bam!</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>


            <div className="container">
                <div className="row">
                    <div className="col-lg-5 mails">
                        <div className="email-section">
                   <h2>E-mail us at: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="e-mail">( hi@somebigname.com )</span></h2>
                        </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="copyright">
                                <img  src={"images/copy.png"}/>
                            </div>
                        </div>
                  
                </div>

<div className="row social_footer">
<div className="col-lg-6">
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


<div className='col-lg-6'>
    <div className='links_top'>
        <a href='#'>( back to top )</a>

        <ul className='footer-list'>
            <li><p>All Rights Reserved</p></li>
            <li><p>Privacy Policy</p></li>
            <li><p>Terms of Use</p></li>
        </ul>
    </div>
</div>
</div>

            </div>
   
        </section>
     
        </>
    )
}

export default Footer;