import PostCard from "./PostCard";

const post = {
        title: "Masha",
        description: "Masha loves Tanea",
        date: new Date("2025-02-14").toLocaleDateString

      }

      const post1 = {
        title: "Tanea",
        description: "Tanea loves Tanea",
        date: new Date("2025-02-13").toLocaleDateString
      }
    
      const post2 = {
        title: "Nastea",
        description: "Tanea and Masha loves Nastea",
        date: new Date("2025-02-12").toLocaleDateString
      }


function PostList() {
  return (
    <>
      <PostCard
      post={post}
      />
      <PostCard
      post={post1}
      />
      <PostCard
      post={post2}
      />
     
    </>
  )
}

export default PostList;