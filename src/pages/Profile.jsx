import React from "react";

const Profile = ({ username, bio, name, email, jobTitle,imgUrl }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, height: '100%' }}>
            <div style={{ backgroundColor: 'white', boxShadow: '-5px 15px 10px rgba(0.2, 0, 0, 0.1)', width: '40vw', height: '100%', flexDirection: 'column', display: 'flex', flex: 1 }}>
                <div style={{ height: '180px', backgroundColor: '#E9F9E2', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    {/* Content */}
                    <div style={{ width: '150px', height: '150px', borderRadius: '50%', overflow: 'hidden', border: '2px solid blue' }}>
                        <img src={imgUrl} alt="profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                </div>
                <span style={{ marginTop: '5px', color: '#FFB001', fontSize: 30, fontWeight: 'bold', fontFamily: "DMM" }}>@{username}</span>
                <span style={{ marginTop: '5px', color: '#BCBABA', fontSize: 15, fontWeight: 'normal', fontFamily: "DMM" }}>Bio</span>
                <span style={{ marginTop: '0px', color: '#E87D46', fontSize: 20, fontWeight: 'normal', fontFamily: "DMM" }}>{bio}</span>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                    borderBottom: '1.9px solid #86CFFE',
                    borderTop: '0.2px solid #F4ECEC',
                    marginInline: '30px',
                    marginTop: '50px',
                    padding: '10px'
                }}>
                    <span style={{ color: '#C4CDD4', fontFamily: "DMM" }}>Full Name</span>
                    <span style={{ color: '#A1A2A6', fontFamily: "DMM", fontSize: '20px', marginRight: '10px' }}>{name}</span>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                    borderBottom: '1.9px solid #86CFFE',
                    marginInline: '30px',
                    marginTop: '10px',
                    padding: '10px'
                }}>
                    <span style={{ color: '#C4CDD4', fontFamily: "DMM" }}>Email</span>
                    <span style={{ color: '#A1A2A6', fontFamily: "DMM", fontSize: '20px', marginRight: '10px' }}>{email}</span>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                    borderBottom: '1.9px solid #86CFFE',
                    marginInline: '30px',
                    marginTop: '10px',
                    padding: '10px'
                }}>
                    <span style={{ color: '#C4CDD4', fontFamily: "DMM" }}>Job Title</span>
                    <span style={{ color: '#A1A2A6', fontFamily: "DMM", fontSize: '20px', marginRight: '10px' }}>{jobTitle}</span>
                </div>
            </div>
        </div>
    );
};

export default Profile;
