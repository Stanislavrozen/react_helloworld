import PostItem from "./PostItem";

const PostList = function ({posts, removePost, listTitle})
{
    return (
        <div className="post-list">
            <h2>{listTitle}</h2>
            {posts.map((post, index) =>
                <PostItem removePost={removePost} key={post.id} post={post} />

            )}
        </div>
    )
}

export default PostList;