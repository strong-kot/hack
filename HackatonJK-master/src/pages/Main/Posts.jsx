import React, {useEffect,  useState} from 'react';
import {useFetching} from "../../hooks/useFetching";
import Loader from "../../component/UI/Loader/Loader";
import Navbar from "../../component/UI/Navbar/Navbar";
import PostList from "../../component/PostList";
import api from "../../services/api";
import ButtonAddFlat from "../../component/UI/ButtonAddFlat/ButtonAddFlat";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const { data: loginData } = await api.auth.getAppartments();
        console.log(loginData)
        setPosts([...posts, ...loginData.apartments])
    })

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <div>
        <Navbar/>
        <div className="App">
            {postError &&
            <h1>Произошла ошибка ${postError}</h1>
            }
            <PostList posts={posts} title=""/>
            <ButtonAddFlat/>
            {isPostsLoading &&
            <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
            }
        </div>
        </div>
    );
}

export default Posts;
