import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';
import Header from '../../components/Header/Header'

const PostPage = () => {
    useProtectedPage();

    return (
        <div>
            <Header />
            <div>
                <h1>Post Page</h1>
                <input
                    placeholder="Adicionar comentário"
                />
                <button>Responder</button>
            </div>
        </div>
    )
}

export default PostPage;