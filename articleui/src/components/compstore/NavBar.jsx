import React from 'react';

export default function NavBar(props) {

    return (
        <div style={{display: props.width < 900 ? "block" : "flex"}}>
            <div id='top'></div>

            <div className='topbar-wrapper' style={{display: props.width < 900 ? "block" : "flex", marginLeft: props.width < 900 ? "0px" : "auto", marginRight: props.width < 900 ? "0px" : "auto", }}>
                <div className='topbar flex' style={{display: props.width < 900 ? "block" : "flex", minWidth: props.width < 900 ? "" : "900px"}}>
                    <div>
                        <div className='title'>
                            Intro to Coding
                        </div>
                    
                    </div>
                    <div className='topbar-buttons flex' style={{display: props.width < 900 ? "block" : "flex"}}>
                        <div className='topbar-link' onClick={()=> window.location.href="http://www.alexwurts.com/#biography"}>
                            About Me
                        </div>
                        <div className='topbar-link' onClick={() => window.location.href="http://www.alexwurts.com/#projects"}>
                            Projects
                        </div>
                        <div className='topbar-link' onClick={() => window.location.href="http://www.alexwurts.com/#experience"}>
                            Experience
                        </div>
                        <div className='topbar-link-instalogo topbar-link' style={{ padding: "6px 10px 7px 10px" }}
                            onClick={() => window.open("https:\/\/www.instagram.com/programmingpilot/")}>
                            <img id="img" className="style-scope yt-img-shadow" alt="" height="30" width="30"
                                src="http://www.alexwurts.com/images/IG_Glyph_Fill.png" />
                        </div>
                        <div className='topbar-link-instalogo topbar-link' style={{ padding: "9px 10px 11px 10px" }}
                            onClick={() => window.open("https:\/\/github.com/ajwurts/")}>
                            <img id="img" className="style-scope yt-img-shadow" alt="" height="23" width="23"
                                src="http://www.alexwurts.com/images/github.png" />
                        </div>
                        <div className='topbar-link-instalogo topbar-link' style={{ padding: "10px 10px 11px 10px" }}
                            onClick={() => window.open("https:\/\/www.youtube.com/channel/UC-dU4MIIpMOjTzn55ALJIaA")}>
                            <img id="img" className="style-scope yt-img-shadow" alt="" height="22" width="32"
                                src="http://www.alexwurts.com/images/youtube.png" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}