import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';

const FeedPage = () => {
    useProtectedPage();

    return (
        <div>
            <h1>Feed Page</h1>
            <input 
            placeholder="Adicionar comentário"
            />
            <button>Responder</button>
        </div>
    )
}

export default FeedPage;