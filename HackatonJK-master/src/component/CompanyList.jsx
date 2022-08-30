import React from 'react';
import {Container} from "react-bootstrap";
import CompanyItem from "./CompanyItem";
import classes from "./CompanyList.module.css"

const CompanyList = ({posts}) => {

    const rootClasses = [classes.recomend_product_shop]
    if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>

            </h1>
        )
    }

    return (

        <Container className="box">
            <h3 className={classes.title}>ЖК</h3>
            <div className="list">
                {posts.map((post, index) =>
                    <CompanyItem number={index + 1} post={post} />
                )}
            </div>

        </Container>
    );
};

export default CompanyList;
