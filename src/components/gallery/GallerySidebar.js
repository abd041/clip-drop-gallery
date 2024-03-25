import React, { useState , useEffect , useRef} from 'react'
import { HomePageClip, HomePageResponsvieClip, bottomBars, leftIcon, rightIcon, sidebaricon } from "../../data/SVG";

const GallerySidebar = () => {
    const[showHelp ,setShowHelp]=useState(false)
    const helpBoxRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (helpBoxRef.current && !helpBoxRef.current.contains(event.target)) {
                setShowHelp(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [helpBoxRef]);
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
                <div className='' style={{marginTop:"16px"}}>
                <button className="sign-in-button side-bar-btn">
                <span className='sidebaricon'>{sidebaricon}</span>    <span className="sign-in-btn">Show case</span>
                    </button>
                </div>
            </div>
            <div>
                <div className='position-relative'>
                    <button className="sign-in-button side-bar-btn">
                    <span className='sidebaricon'>{sidebaricon}</span>   <span className="sign-in-btn" onClick={()=> setShowHelp(true)}>Help</span>
                    
                    </button>
                    <div className='help-box-wrapper'  ref={helpBoxRef} style={{display :showHelp ? "block":"none"}}>
                            <div className='help-box-title'>
                                <h1>How can we help you?</h1>
                            </div>
                            <div className='help-box-billing-main-wrap'>
                                <div className='help-box-billing-wrap'>
                                    <div className='d-flex align-items-center'> <div className='help-box-billing-svg'>{leftIcon}</div>
                                    <div className='help-box-billing-heading'><h4>Billing Detail</h4></div></div>
                                   
                                    <div>{rightIcon}</div>
                                </div>
                                <div className='help-box-billing-para'><p>Get help with issues with your Midjourney subscription, payment methods, upgrades, and fast hours</p></div>
                            </div>
                            <div className=''>
                                <div className='help-box-billing-wrap'>
                                    <div className='d-flex align-items-center'> <div className='help-box-billing-svg'>{leftIcon}</div>
                                    <div className='help-box-billing-heading'><h4>Billing Detail</h4></div></div>
                                   
                                    <div>{rightIcon}</div>
                                </div>
                                <div className='help-box-billing-para'><p>Get help with issues with your Midjourney subscription, payment methods, upgrades, and fast hours</p></div>
                            </div>
                        </div>
                </div>
                <div>
                    <button className="sign-in-button side-bar-btn">
                    <span className='sidebaricon'>{sidebaricon}</span>
                        <span className="sign-in-btn">Sign In</span>
                    </button>
                </div>
                <div>
                    <button className="sign-in-button side-bar-btn">
                    <span className='sidebaricon'>{sidebaricon}</span> <span className="sign-in-btn">Sign Up</span>
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