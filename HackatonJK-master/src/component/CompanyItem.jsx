import React from 'react';
const CompanyItem = (props) => {

    return (
        <div className="product">
            <picture>
                <img src={props.post.image} alt="Image is here" />
            </picture>
            <h3>{props.post.name}</h3>
        </div>


    );
};

export default CompanyItem;
