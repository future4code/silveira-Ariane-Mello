import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';
import Header from '../../components/Header/Header'
import useForm from '../../hooks/useForm';
import { ButtonLike, ScreenContainer, Form, ContainerPost } from '../FeedPage/styled';
import { createComment } from '../../services/posts';
import { useParams, useNavigate } from 'react-router-dom';
import useRequestData from '../../hooks/useRequestData';
import { baseURL } from '../../constants/urls';
import { goToFeed, goToPost } from '../../routes/coordinator';
import axios from 'axios';
import downvoteblack from '../../assets/img/downvoteblack.png';
import downvotered from '../../assets/img/downvotered.png';
import upvotegreen from '../../assets/img/upvotegreen.png';
import upvoteblack from '../../assets/img/upvoteblack.png';
import comments from '../../assets/img/comments.png';

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
                <h3>{comment.title}</h3>
                <ButtonLike>
                    <img src={posts.userVote === 1 ? upvotegreen : upvoteblack} onClick={() => handleLike(posts.id, posts.userVote)} alt="Ícone seta curtir" />
                    <p>{posts.voteSum}</p>
                    <img src={posts.downVote === -1 ? downvotered : downvoteblack} onClick={() => handleNoLike(posts.id, posts.userVote)} alt="Ícone seta descurtir" />
                </ButtonLike>
            </ContainerPost>
        )
    });

    const listPost = posts && posts.map((posts) => {
        if (posts.id === params.id) {
            return (
                <ContainerPost key={posts.id}>
                    <p>Enviado por: {posts.username}</p>
                    <p>{posts.title}</p>
                    <ButtonLike>
                        <img src={posts.userVote === 1 ? upvotegreen : upvoteblack} onClick={() => handleLike(posts.id, posts.userVote)} alt="Ícone seta curtir" />
                        <p>{posts.voteSum}</p>
                        <img src={posts.downVote === -1 ? downvotered : downvoteblack} onClick={() => handleNoLike(posts.id, posts.userVote)} alt="Ícone seta descurtir" />
                        <img src={comments} onClick={() => goToPost(navigate, posts.id)} key={posts.id} alt="Ícone comentário" /> {posts.commentCount}
                    </ButtonLike>
                </ContainerPost>
            )
        }
    });

    const handleVote = (postId, direction) => {
        const headers = {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        };

        const body = {
            direction: direction
        };

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
    };

    const handleLike = (postId, userVote) => {
        if (userVote === 1) {
            handleVote(postId)
        } else {
            handleVote(postId, 1)
        }
    };

    const handleNoLike = (postId, userVote) => {
        if (userVote === -1) {
            handleVote(postId)
        } else {
            handleVote(postId, -1)
        }
    };

    return (
        <div>
            <Header />
            <h1></h1>
            <ScreenContainer>
                {listPost}
                <Form onSubmit={onSubmitForm}>
                    <input
                        placeholder="Adicionar comentário"
                        name={"body"}
                        onChange={onChange}
                        value={form.body}
                        required
                    />
                    <button><p>Responder</p></button>
                    <button onClick={() => goToFeed(navigate)}><p>Voltar</p></button>
                </Form>
                {listComment}
            </ScreenContainer>
        </div>
    )
};

export default PostPage;