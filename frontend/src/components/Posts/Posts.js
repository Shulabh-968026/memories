import React from 'react'
import { useSelector } from 'react-redux';
import Post from './Post/Post'
import makeStyles from "./style.js"
function Posts() {
  const classes = makeStyles();
  const posts = useSelector(state=>state.fetchPostReducer.posts.memories)
  console.log(posts)
  return (
    <>
      <h2>Posts</h2>
      <Post/>
      <Post/>
      <Post/>
    </>
  )
}

export default Posts