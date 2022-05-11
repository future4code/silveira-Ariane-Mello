import React, { useState } from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';
import Header from '../../components/Header/Header'
import useForm from '../../hooks/useForm';
import { ScreenContainer, ContainerPost, Form } from '../FeedPage/styled';
import { createComment } from '../../services/posts';
import { useParams } from 'react-router-dom';

const PostPage = () => {

    const paramns = useParams();

    useProtectedPage();

    const [posts, setPosts] = useState();

    const { form, onChange, clear } = useForm({});

    const onSubmitForm = (event) => {
        event.preventDefault()
        createComment(form, paramns.id, clear)
    };

    const listPost = posts && posts.map((posts) => {
        return (
            <div>
                <p>Enviado por: {posts.username}</p>
            </div>
        )
    });

    return (
        <div>
            <Header />
            <ScreenContainer>
                <h1>Post Page</h1>
                <Form>
                    <input
                        placeholder="Adicionar comentário"
                        name={"comment"}
                        onChange={onChange}
                        required
                    />
                    <button>Responder</button>
                </Form>
            </ScreenContainer>
            {listPost}
        </div>
    )
};

export default PostPage;