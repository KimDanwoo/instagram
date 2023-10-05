import React from 'react'
import GridSpinner from '../ui/icons/GridSpinner'
import PostGridCard from './PostGridCard'
import usePosts from '@/hooks/usePosts'

export default function PostGrid() {
  const { posts, isLoading, error } = usePosts()

  if (error) {
    return <p>실패했습니다😭</p>
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[300px]">
        <GridSpinner />
      </div>
    )
  }

  if (!error && !isLoading && !posts?.length) {
    return <p className="text-center mt-24">게시물이 없습니다😭</p>
  }

  return (
    <ul className="grid grid-cols-3 gap-2 p-2">
      {posts &&
        posts.map((post, index) => (
          <li key={post.id}>
            <PostGridCard post={post} priority={index < 6} />
          </li>
        ))}
    </ul>
  )
}
