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
import axios from 'axios';

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
                <button onClick={() => handleLike(posts.id, posts.userVote)}>Like</button>
                <button onClick={() => handleNoLike(posts.id, posts.userVote)}>Dislike</button>
            </ContainerPost>
        )
    });

    const handleVote = (postId, direction) => {
        const headers = {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }
        const body = {
            direction: direction
        }
        if (direction === 1) {
            axios.post(`${baseURL}/posts/${postId}/votes`, body, headers
            ).then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        } else if (direction === -1) {
            axios.put(`${baseURL}/posts/${postId}/votes`, body, headers
            ).then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        } else {
            axios.delete(`${baseURL}/posts/${postId}/votes`, headers
            ).then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        }
    }

    const handleLike = (postId, userVote) => {
        if (userVote === 1) {
            handleVote(postId)
        } else {
            handleVote(postId, 1)
        }
    }

    const handleNoLike = (postId, userVote) => {
        if (userVote === -1) {
            handleVote(postId)
        } else {
            handleVote(postId, -1)
        }
    }

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