import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = ({ userId }) => {
  const [caption, setCaption] = useState('');
  const [category, setCategory] = useState('');
  const [file, setFile] = useState(null);
  const [posts, setPosts] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) return alert('Please select a file.');

    const reader = new FileReader();
    reader.onloadend = async () => {
      try {
        const res = await axios.post('http://localhost:5000/api/posts', {
          userId,
          caption,
          category,
          file: reader.result, // base64 encoded file
        });
        setPosts([res.data.post, ...posts]); // add new post to top
        setCaption('');
        setCategory('');
        setFile(null);
      } catch (error) {
        console.error('Upload failed:', error);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="max-w-xl mx-auto p-4 space-y-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-6 flex flex-col gap-4"
      >
        <h2 className="text-2xl font-semibold">Create a Post</h2>
        <input
          type="text"
          placeholder="Caption"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="p-2 border rounded-md"
          required
        />
        <input
          type="text"
          placeholder="Category (e.g., Nature, Travel)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border rounded-md"
          required
        />
        <input
          type="file"
          accept="image/*,video/*"
          onChange={(e) => setFile(e.target.files[0])}
          className="p-2 border rounded-md"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Upload
        </button>
      </form>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {posts.map((post) => (
          <div
            key={post._id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            {post.imageUrl.includes('video')
              ? (
                <video
                  src={post.imageUrl}
                  controls
                  className="w-full h-60 object-cover"
                />
              ) : (
                <img
                  src={post.imageUrl}
                  alt="Post"
                  className="w-full h-60 object-cover"
                />
              )}
            <div className="p-4">
              <h3 className="text-lg font-semibold">{post.caption}</h3>
              <p className="text-sm text-gray-500">#{post.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreatePost;
