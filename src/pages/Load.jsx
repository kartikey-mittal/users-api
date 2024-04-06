import React from "react";

const Load = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, height: '100%' }}>
            <div style={{ backgroundColor: 'white', boxShadow: '-5px 15px 10px rgba(0.2, 0, 0, 0.1)', width: '40vw', height: '100%', flexDirection: 'column', display: 'flex', flex: 1 }}>
                <div style={{ height: '100%', backgroundColor: '#E9F9E2', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    {/* Content */}
                    {/* <span style={{ marginBottom: '50px', color: '#009FFD', fontSize: 25, fontWeight: 'bold', fontFamily: "DMM" }}>👋<br></br>Search Users </span> */}
                    <div style={{ width: '250px', height: '250px', borderRadius: '0%', overflow: 'hidden', border: '0px solid blue' }}>
                        <img src='https://cdn-icons-png.flaticon.com/512/909/909223.png' alt="profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>

                </div>
                
                <span style={{ marginTop: '10px', color: '#FFB001', fontSize: 20, fontWeight: 'normal', marginBottom: '10px', fontFamily: "DMM" }}>Made with ♥ by Kartikey Mittal</span>

                <a href="https://github.com/kartikey-mittal?tab=repositories" target="_blank" rel="noreferrer">
                    <span style={{ marginTop: '10px', color: '#009FFD', fontSize: 20, fontWeight: 'normal', marginBottom: '10px', fontFamily: "DMM" }}>
                        Github Repository Code
                    </span>
                </a>


            </div>
        </div>
    );
};

export default Load;
