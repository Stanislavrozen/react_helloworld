import CommonButton from "./UI/commonButton/CommonButton";

const PostItem = function ({post, removePost})
{
    return (
        <div className="post-item">
            {/* <strong>{count}. {title}</strong> */}
            <div className="post-body">
                <strong>{post.id}. {post.title}</strong>
                <div>
                    {post.body}
                </div>
            </div>
            <div className="post-buttons">
                <CommonButton onClick={e => removePost(post.id)}>Удалить</CommonButton>
            </div>
        </div>
    )
}

export default PostItem;