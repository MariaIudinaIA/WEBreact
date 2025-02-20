function PostCard({post}) {
    return(
       <>
         <h1>{post.title}</h1>
         <p>{post.description}</p>
         <p>{post.date}</p>
       </>
    )
}

export default PostCard;