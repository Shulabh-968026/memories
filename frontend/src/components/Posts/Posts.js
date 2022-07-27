import React from 'react'
import Post from './Post/Post'
import makeStyles from "./style.js"
function Posts() {
  const classes = makeStyles();
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