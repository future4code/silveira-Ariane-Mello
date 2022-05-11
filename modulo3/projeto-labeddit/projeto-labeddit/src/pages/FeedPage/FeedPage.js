import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';
import Header from '../../components/Header/Header';
import { createPost } from '../../services/posts';
import useForm from '../../hooks/useForm';
import { ScreenContainer, ContainerPost, Form } from './styled';
import { goToPost } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';
import useRequestData from '../../hooks/useRequestData';
import { baseURL } from '../../constants/urls';

const FeedPage = () => {

    const navigate = useNavigate();

    useProtectedPage();

    const posts = useRequestData([], `${baseURL}/posts`)

    const { form, onChange, clear } = useForm({ title: '', body: '' });

    const onSubmitForm = (event) => {
        event.preventDefault()
        createPost(form, clear)
    };

    const listPost = posts && posts.map((posts) => {
        return (
            <ContainerPost onClick={() => goToPost(navigate, posts.id)} key={posts.id}>
                <p>Enviado por: {posts.username}</p>
                <p>{posts.title}</p>
                <p>{posts.voteSum}</p>
                <p>{posts.userVote}</p>
            </ContainerPost>
        )
    });

    return (
        <div>
            <Header />
            <ScreenContainer>
                <h1>Feed Page</h1>
                <Form onSubmit={onSubmitForm}>
                    <input
                        placeholder="Título"
                        name={"title"}
                        value={form.title}
                        onChange={onChange}
                        required
                    />
                    <input
                        placeholder="Escreva seu post..."
                        name={"body"}
                        value={form.body}
                        onChange={onChange}
                        required
                    />
                    <button>Postar</button>
                </Form>
                {listPost}
            </ScreenContainer>
        </div>
    )
};

export default FeedPage;