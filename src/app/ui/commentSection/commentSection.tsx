import React, { useState, useEffect } from 'react';
import styles from './commentSection.module.css';

interface Comment {
    id: number;
    author: string;
    text: string;
}

const CommentSection: React.FC<{ itemId: number }> = ({ itemId }) => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [newComment, setNewComment] = useState<string>('');
    const [author, setAuthor] = useState<string>('');

    useEffect(() => {
        // Fetch existing comments (this is a placeholder URL)
        fetch(`/api/comments?itemId=${itemId}`)
            .then(response => response.json())
            .then(data => setComments(data));
    }, [itemId]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const comment = { author, text: newComment };

        // Post new comment (this is a placeholder URL)
        const response = await fetch(`/api/comments?itemId=${itemId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comment)
        });

        if (response.ok) {
            const newComment = await response.json();
            setComments([...comments, newComment]);
            setNewComment('');
            setAuthor('');
        }
    };

    return (
        <div className={styles.commentSection}>
            <h2>Comments</h2>
            <form onSubmit={handleSubmit} className={styles.commentForm}>
                <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Your name"
                    className={styles.input}
                    required
                />
                <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Your comment"
                    className={styles.textarea}
                    required
                ></textarea>
                <button type="submit" className={styles.submitButton}>Submit</button>
            </form>
            <div className={styles.commentsList}>
                {comments.map(comment => (
                    <div key={comment.id} className={styles.comment}>
                        <p className={styles.author}>{comment.author}</p>
                        <p>{comment.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CommentSection;
