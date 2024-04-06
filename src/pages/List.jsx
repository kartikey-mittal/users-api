import React, { useState, useEffect } from "react";
import axios from "axios";
import Profile from "./Profile";
import Load from "./Load";
const List = () => {
    const [userData, setUserData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users');
            console.log(response);
            const filteredData = response.data.filter(user => parseInt(user.id) >= 11); // Filter data starting from ID 11 onwards
            const modifiedData = filteredData.map(user => ({
                imageUrl: user.avatar,
                full_name: `${user.profile.firstName} ${user.profile.lastName}`,
                email: user.profile.email,
                username: user.profile.username,
                bio: user.Bio,
                jobTitle: user.jobTitle
            }));
            setUserData(modifiedData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
        if (query.trim() === "") {
            fetchData();
        } else {
            const filteredUserData = userData.filter(user => user.full_name.toLowerCase().includes(query.toLowerCase()));
            const reorderedUserData = [
                ...filteredUserData.filter(user => user.full_name.toLowerCase().startsWith(query.toLowerCase())),
                ...filteredUserData.filter(user => !user.full_name.toLowerCase().startsWith(query.toLowerCase()))
            ];
            setUserData(reorderedUserData);
        }
    };

    const handleCardClick = (user) => {
        // Find the full user object from the userData array
        const fullUser = userData.find(u => u.full_name === user.full_name);
        if (fullUser) {
            setSelectedUser({
                imageUrl: user.imageUrl,
                full_name: user.full_name,
                email: user.email,
                username: fullUser.username, // Ensure this is correctly extracted
                bio: fullUser.bio, // Ensure this is correctly extracted
                jobTitle: fullUser.jobTitle // Ensure this is correctly extracted
            });
        }
    };

    const Card = ({ imageUrl, full_name, email }) => (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#E6EEF1',
                boxShadow: '0px 2px 3px rgba(0.1, 0, 0, 0.1)',
                borderRadius: '8px',
                padding: '10px',
                height: '85px',
                margin: '10px',
                cursor: 'pointer' // Add cursor pointer
            }}
            onClick={() => handleCardClick({ imageUrl, full_name, email })} // Add onClick handler
        >
            <div
                style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '1px solid #0074D9',
                    marginRight: '16px',
                    marginLeft: '20px'
                }}
            >
                <img
                    src={imageUrl}
                    alt={full_name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <span style={{ color: '#6341D6', fontSize: '20px', marginBottom: '5px', fontFamily: "DMM" }}>
                    {full_name}
                </span>
                <span style={{ color: '#B0B1B4', fontSize: '16px', fontFamily: 'DMM' }}>
                    {email}
                </span>
            </div>
        </div>
    );

    return (
        <div style={{ display: 'flex', flexDirection: 'row',}}>
        <div style={{ display: 'flex', flexDirection: 'column',  height: '100%' ,backgroundColor:'red'}}>
            <div style={{ backgroundColor: 'white', boxShadow: '-5px 15px 10px rgba(0.2, 0, 0, 0.1)', width: '40vw', height: '100%', flexDirection: 'column', display: 'flex', flex: 1 }}>
                <div style={{ height: '100px', backgroundColor: '#E9F9E2', alignContent: 'center' }}>
                    <div style={{ display: 'flex', margin: 10, flex: 1 }}>
                        <input
                            type="text"
                            placeholder="Enter name to search"
                            value={searchQuery}
                            onChange={(e) => handleSearch(e.target.value)}
                            style={{
                                borderRadius: '10px',
                                border: '1px solid #ccc',
                                padding: '5px',
                                fontSize: 15,
                                flex: 1,
                                marginRight: '10px',
                                height: '35px',
                                fontFamily: 'DMM',
                                color: 'blue',
                                marginLeft: '10px',
                                outline: 'none',
                                boxShadow: '0 0 0 1px blue'
                            }}
                        />
                        <button
                            onClick={() => handleSearch(searchQuery)}
                            style={{
                                borderRadius: '10px',
                                border: 'none',
                                padding: '5px 20px',
                                backgroundColor: '#007BFF',
                                color: 'white',
                                cursor: 'pointer',
                                fontFamily: "DMM"
                            }}
                        >
                            Search
                        </button>
                    </div>
                </div>
                <div style={{ flex: 1, overflowY: 'auto' }}>
                    {userData.map((user, index) => (
                        <Card
                            key={index}
                            imageUrl={user.imageUrl}
                            full_name={user.full_name}
                            email={user.email}
                        />
                    ))}
                </div>
            </div>
        </div>
        <div style={{width:'50px'}}></div>
        {selectedUser ?(<Profile username={selectedUser.username} bio={selectedUser.bio} name={selectedUser.full_name} email={selectedUser.email} jobTitle={selectedUser.jobTitle} imgUrl={selectedUser.imageUrl} />):(<Load/>) }
        </div>
    );
};

export default List;
