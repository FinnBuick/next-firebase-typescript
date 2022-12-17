import AuthCheck from "@components/AuthCheck";
import React, { useState } from "react";

export default function AdminPostsPage() {
  return (
    <main>
      <AuthCheck>
        <PostList />
        <CreateNewPost />
      </AuthCheck>
    </main>
  );
}

function PostList() {
  return (
    <>
      <h1>Manage your Posts</h1>
    </>
  );
}

function CreateNewPost() {
  const [title, setTitle] = useState("");

  return (
    <>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="My Awesome Article!"
      />
      <button type="submit" className="btn-green">
        Create New Post
      </button>
    </>
  );
}
