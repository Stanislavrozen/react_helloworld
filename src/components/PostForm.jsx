import React from 'react'
import TextInput from './UI/textInput/TextInput';
import CommonButton from './UI/commonButton/CommonButton';

const PostForm = (props) =>
{
    const [post, setPost] = React.useState({ title: '', body: '' });

    function addPost(ev)
    {
        ev.preventDefault();
        const newPost = { ...post, id: Date.now() };
        props.addPost(newPost);
        setPost({ title: '', body: '' });
    };

    return (
        <form className="post-form">
            <div>
                <TextInput value={post.title}
                    onChange={e => setPost({ ...post, title: e.target.value })}
                    p="Название" />
                <TextInput value={post.body}
                    onChange={e => setPost({ ...post, body: e.target.value })}
                    p="Описание" />
            </div>
            <div>
                <CommonButton onClick={addPost}>Создать</CommonButton>
            </div>
        </form>
    )
}

export default PostForm;