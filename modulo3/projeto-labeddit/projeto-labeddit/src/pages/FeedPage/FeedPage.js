import React, { useEffect, useState } from 'react';
import useUnprotectedPage from '../../hooks/useProtectedPage';
import Header from '../../components/Header/Header';
import { post } from '../../services/posts';
import { createPost } from '../../services/posts';
import useForm from '../../hooks/useForm';
import { ScreenContainer, ContainerPost } from './styled';


const FeedPage = () => {

    useEffect(() => {
        post(setPosts)
    }, []);

    useUnprotectedPage();

    const [posts, setPosts] = useState();

    const { form, onChange, clear } = useForm({ title: '', body: '' });

    const onSubmitForm = (event) => {
        event.preventDefault()
        createPost(form, clear)
    };

    const listPost = posts && posts.map((posts) => {
        return (
            <ContainerPost key={posts.id}>
                <p>{posts.title}</p>
                <p>{posts.username}</p>
            </ContainerPost>
        )
    });

    return (
        <div>
            <Header />
            <ScreenContainer>
                <h1>Feed Page</h1>
                <input
                    placeholder="Título"
                    name={"title"}
                    onChange={onChange}
                    required
                />
                <input
                    placeholder="Escreva seu post..."
                    name={"body"}
                    onChange={onChange}
                    required
                />
                <button>Postar</button>
            </ScreenContainer>
            {listPost}
        </div >
    )
};

export default FeedPage;