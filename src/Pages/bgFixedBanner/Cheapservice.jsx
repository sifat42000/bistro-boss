import React from 'react';


function Cheapservice() {

    const containerStyle = {
        width: "1000px",
        height: "400px", // Full viewport height
        backgroundImage: "url('https://i.ibb.co/ngfvVnD/chef-service.jpg')", // Replace with your image path
        backgroundSize: "cover", // Ensures the image covers the entire container
         backgroundAttachment: "fixed",
        backgroundPosition: "center", // Centers the image
        position: "relative", // Allows absolute positioning of text inside
        display: "flex",
        justifyContent: "center", // Centers content horizontally
        alignItems: "center", // Centers content vertically
        left: "70px",
        marginBottom: "80px"
        
    };

    const textStyle = {
        color: "white", // Text color
        textAlign: "center", // Center-aligns text
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background for better readability
        padding: "20px", // Padding around the text
        borderRadius: "10px", // Optional rounded corners
        width: "700px"
    };

    return (
        <div className='' style={containerStyle}>
            <div style={textStyle}>
                <h1 className='text-2xl mb-3'>BISTRO BOSS</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
            </div>
        </div>
    );
};

export default Cheapservice;