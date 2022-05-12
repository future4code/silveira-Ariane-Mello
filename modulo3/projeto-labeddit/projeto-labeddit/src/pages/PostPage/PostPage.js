import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';
import Header from '../../components/Header/Header'
import useForm from '../../hooks/useForm';
import { ScreenContainer, Form, ContainerPost } from '../FeedPage/styled';
import { createComment } from '../../services/posts';
import { useParams, useNavigate } from 'react-router-dom';
import useRequestData from '../../hooks/useRequestData';
import { baseURL } from '../../constants/urls';
import { goToFeed } from '../../routes/coordinator';
import axios from 'axios';

const PostPage = () => {

    const navigate = useNavigate();

    useProtectedPage();

    const params = useParams();

    const posts = useRequestData([], `${baseURL}/posts`);

    const detail = useRequestData([], `${baseURL}/posts/${params.id}/comments`);

    const { form, onChange, clear } = useForm({ body: '' });

    const onSubmitForm = (event) => {
        event.preventDefault()
        createComment(form, params.id, clear)
    };

    const listComment = detail && detail.map((comment) => {
        return (
            <ContainerPost key={comment.id}>
                <p>Enviado por: {comment.username}</p>
                <p>{comment.body}</p>
            </ContainerPost>
        )
    });

    const listPost = posts && posts.map((posts) => {
        if (posts.id === params.id) {
            return (
                <ContainerPost key={posts.id}>
                    <p>Enviado por: {posts.username}</p>
                    <p>{posts.title}</p>
                    <button onClick={() => handleLike(posts.id, posts.userVote)}>Like</button>
                    <button onClick={() => handleNoLike(posts.id, posts.userVote)}>Dislike</button>
                </ContainerPost>
            )
        }
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
            axios.post(`${baseURL}/comments/${postId}/votes`, body, headers
            ).then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        } else if (direction === -1) {
            axios.put(`${baseURL}/comments/${postId}/votes`, body, headers
            ).then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        } else {
            axios.delete(`${baseURL}/comments/${postId}/votes`, headers
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
                <h1>Post Page</h1>
                {listPost}
                <Form onSubmit={onSubmitForm}>
                    <input
                        placeholder="Adicionar comentário"
                        name={"body"}
                        onChange={onChange}
                        value={form.body}
                        required
                    />
                    <button>Comentar</button>
                </Form>
                {listComment}
                <button onClick={() => goToFeed(navigate)}>Voltar</button>
            </ScreenContainer>
        </div>
    )
};

export default PostPage;