import React from 'react'

const PostsFilter = ({filter, setFilter}) =>
{
    return (
        <div>
            <TextInput
                p="Search..."
                value={filter.query}
                onChange={onSearchChange}
            />
            <SortSelect
                fields={Object.keys(posts[0])}
                value={filter.sort}
                onChange={sortPosts}
            />
        </div>
    )
}

export default PostsFilter