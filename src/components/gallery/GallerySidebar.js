import React from 'react'
import { HomePageClip, HomePageResponsvieClip, bottomBars } from "../../data/SVG";

const GallerySidebar = () => {
    return (
        <>
         <div className="gallery-sidebar-wrapper">
            <div>
                <div class="d-flex align-items-center gap-2">
                    <span className="d-none d-lg-block">{HomePageClip}</span>
                    <span>
                        <a
                            href="/"
                            class="d-flex align-items-center  opacity-100 text-decoration-none text-dark"
                            style={{ transition: "all 0.2s ease" }}
                        >
                            <span class="d-none d-sm-inline font-weight-bold subpixel-antialiased">
                                {HomePageResponsvieClip}
                            </span>
                        </a>
                    </span>
                </div>
            </div>
            <div>
                <div>
                    <button className="sign-in-button side-bar-btn">
                        <span className="sign-in-btn">Help</span>
                    </button>
                </div>
                <div>
                    <button className="sign-in-button side-bar-btn">
                        <span className="sign-in-btn">Sign In</span>
                    </button>
                </div>
                <div>
                    <button className="sign-in-button side-bar-btn">
                        <span className="sign-in-btn">Sign Up</span>
                    </button>
                </div>
            </div>
        </div>
        <div className='gallery-sidebar-mobile'>
            <div className='gallery-sidebar-icons-mobile'>
                <div className=''>{bottomBars}</div>
                <div className='bottom-bar-text'><h1>show</h1></div>
            </div>
            <div className='gallery-sidebar-icons-mobile'>
                <div className=''>{bottomBars}</div>
                <div className='bottom-bar-text'><h1>show</h1></div>
            </div>
            <div className='gallery-sidebar-icons-mobile'>
                <div className=''>{bottomBars}</div>
                <div className='bottom-bar-text'><h1>show</h1></div>
            </div>
        </div>
        </>
       
    )
}

export default GallerySidebar