import React, {useEffect, useMemo, useState} from 'react';
import {useFetching} from "../../hooks/useFetching";
import Loader from "../../component/UI/Loader/Loader";
import RecomendationList from "../../component/RecomendationList";
import Navbar from "../../component/UI/Navbar/Navbar";
import api from "../../services/api";
import MySelect from "../../component/UI/select/MySelect";


function Recomendations() {
    const [posts, setPosts] = useState([])
    const [selected, setSelected] = useState('')
    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const { data: loginData } = await api.auth.getRecomendation();
        setPosts([...posts, ...loginData.results])
    })

    useEffect(() => {
        fetchPosts()
    }, [])

    const sortRecomends =(sort)=>{
        setSelected(sort)
    }
    const selectedPosts=useMemo(()=>{
        return posts.filter(post=>post.residential_complex.toLowerCase().includes(selected.toLowerCase()))
    },[selected, posts])
    return (
        <div>

            <Navbar/>
            <MySelect
                value={selected}
                onChange={sortRecomends}
                defaultValue="Все ЖК"
                options={[
                    {value:'Grand Palace', name:'Grand Palace'},
                    {value:'AVrorA', name:'AVrorA'},
                    {value:'URAL', name:'URAL'},
                    {value:'Fresh', name:'Fresh'},
                    {value:'Novella', name:'Novella'},
                    {value:'Смородина', name:'Смородина'},
                    {value:'Кислород', name:'Кислород'},
                    {value:'Летний', name:'Летний '},
                ]}
            />
        <div className="App">
            {postError &&
                <h1>Произошла ошибка ${postError}</h1>
            }
            <RecomendationList posts={selectedPosts} title=""/>
            {isPostsLoading &&
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
            }
        </div>
        </div>
    );
}

export default Recomendations;
