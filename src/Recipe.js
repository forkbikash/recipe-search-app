import React from 'react';

const Recipe = ({ title, imgsrc }) => {
    return (
        <div className="recipe">
            <h3 className="recipe-title">
                {title}
            </h3>
            <img src={imgsrc} alt="" className="recipe-img" />
        </div>
    );
};

export default Recipe;
