import { useNavigate } from "react-router-dom";
import useBlogPosts from "../hooks/useBlogPosts";

function HomePage() {
  const navigate = useNavigate();
  const { posts, isLoading, isError } = useBlogPosts();

  return (
    <div>
      <div className="app-wrapper">
        <h1 className="app-title">Posts</h1>
        <button>Create Post</button>
      </div>
      <div className="board">
        {isLoading ? (
            <h1>Loading ....</h1>
          ) : isError ? (
            <h1>Request failed</h1>
          ) : (
            posts.map((post) => (
              <div key={post.id} className="post">
                <h1>{post.title}</h1>
                <div className="post-actions">
                  <button
                    className="view-button"
                    onClick={() => navigate(`/post/view/${post.id}`)}
                  >
                    View post
                  </button>
                  <button
                    className="edit-button"
                    onClick={() => navigate(`/post/edit/${post.id}`)}
                  >
                    Edit post
                  </button>
                </div>
                <button className="delete-button">x</button>
              </div>
            ))
          )}
      </div>
    </div>
  );
}

export default HomePage;
