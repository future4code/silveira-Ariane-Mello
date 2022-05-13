import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';
import Header from '../../components/Header/Header';
import { createPost } from '../../services/posts';
import useForm from '../../hooks/useForm';
import { ScreenContainer, ContainerPost, Form, ButtonLike } from './styled';
import { goToPost } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';
import useRequestData from '../../hooks/useRequestData';
import { baseURL } from '../../constants/urls';
import axios from 'axios';
import downvoteblack from '../../assets/img/downvoteblack.png';
import downvotered from '../../assets/img/downvotered.png';
import upvotegreen from '../../assets/img/upvotegreen.png';
import upvoteblack from '../../assets/img/upvoteblack.png';
import comments from '../../assets/img/comments.png';

const FeedPage = () => {

    const navigate = useNavigate();

    useProtectedPage();

    const posts = useRequestData([], `${baseURL}/posts`);

    const { form, onChange, clear } = useForm({ title: '', body: '' });

    const onSubmitForm = (event) => {
        event.preventDefault()
        createPost(form, clear)
    };

    const listPost = posts && posts.map((posts) => {
        return (
            <ContainerPost>
                <p>Enviado por: {posts.username}</p>
                <p>{posts.title}</p>
                <ButtonLike>
                    <img src={posts.userVote === 1 ? upvotegreen : upvoteblack} onClick={() => handleLike(posts.id, posts.userVote)} />
                    <p>{posts.voteSum}</p>
                    <img src={posts.downVote === -1 ? downvotered : downvoteblack} onClick={() => handleNoLike(posts.id, posts.userVote)} />
                    <img src={comments} onClick={() => goToPost(navigate, posts.id)} key={posts.id} /> {posts.commentCount}
                </ButtonLike>
            </ContainerPost>
        )
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
            <ScreenContainer>
                <Form onSubmit={onSubmitForm}>
                    <input
                        placeholder="Título"
                        name={"title"}
                        value={form.title}
                        onChange={onChange}
                        required
                    />
                    <textarea
                        placeholder="Escreva seu post..."
                        name={"body"}
                        value={form.body}
                        onChange={onChange}
                        required
                    />
                    <button><p>Postar</p></button>
                </Form>
                {listPost}
            </ScreenContainer>
        </div>
    )
};

export default FeedPage;