import { useParams, useNavigate } from "react-router-dom";
import useBlogPosts from "../hooks/useBlogPosts";

function ViewPostPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { posts, isLoading, isError } = useBlogPosts();


  const selectedPost = posts.find((post) => post.id.toString() === id);

  if (isLoading) return <h1>Loading...</h1>; 
  if (isError) return <h1>Error loading posts</h1>; 

  if (!selectedPost) {
    return <h1>Post not found</h1>; 
  }

  return (
    <div>
      <h1>View Post Page</h1>
      <div className="view-post-container">
        <h2>{selectedPost.title}</h2> 
        <p>{selectedPost.content}</p> 
      </div>

      <hr />
      <div className="show-all-posts-container">
        <h2>All Posts</h2>
        {posts.map((post) => {
          return (
            <div key={post.id} className="post">
              <h1>{post.title}</h1>
              <div className="post-actions">
                <button className="view-button">View post</button>
              </div>
            </div>
          );
        })}
      </div>

      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default ViewPostPage;
