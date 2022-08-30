import React from 'react';
import {Container} from "react-bootstrap";
import RecomendationsItem from "./RecomendationsItem";

const RecomendationList = ({posts}) => {

    if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
            </h1>
        )
    }

    return (

            <Container className="box">
                <div className="list">
                    {posts.map((post, index) =>
                        <RecomendationsItem number={index + 1} post={post} />
                    )}
                </div>
            </Container>
    );
};

export default RecomendationList;
