import React from 'react';
import PostItem from "./PostItem";
import {Container} from "react-bootstrap";

const PostList = ({posts, title}) => {
    if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
            </h1>
        )
    }

    return (

        <div>
            <Container className="box">
                <div className="list">
                    {posts.map((post, index) =>
                        <PostItem number={index + 1} post={post} />
                    )}
                </div>
            </Container>

        </div>
    );
};

export default PostList;
