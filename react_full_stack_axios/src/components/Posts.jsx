import React, { useEffect, useState } from "react";
import { getPost } from "../api/PostApi.jsx";
import { deletePost } from "../api/PostApi.jsx";
import Form from "../components/Form.jsx";

function Posts() {

    const [data, setData] = useState([]);
    const [updateData, setUpdateData] = useState({});

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await getPost();
                // console.log(res);
                setData(res.data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };
        fetchPosts();
    }, []);

    const handleEdit = (post) => {
        setUpdateData(post);
    };

    const handleDelete = async (id) => {
        try {
            const res = await deletePost(id);
            if (res.status === 200) {
                const newUpdatedPosts = data.filter((currPost) => {
                    return currPost.id !== id
                })
                setData(newUpdatedPosts);
            } else {
                console.log(res.status)
            }
        } catch (error) {
            console.error("Error deleting post:", error);
        }

    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen flex flex-col justify-center items-center">

            <Form
                data={data}
                setData={setData}
                updateData={updateData}
                setUpdateData={setUpdateData}
            />

            {data.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                    {data.map((post) => (
                        <div
                            key={post.id}
                            className="flex flex-col justify-between bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-shadow duration-300 border border-gray-100 h-full min-h-[250px]"
                        >

                            <div className="mt-2">
                                <h2 className="text-sm text-gray-400 mb-1">#{post.id}</h2>
                                <h3 className="text-xl font-semibold text-indigo-600 mb-2 line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-gray-700 mb-4 text-sm line-clamp-3">
                                    {post.body}
                                </p>
                            </div>
                            <div className="flex justify-center gap-6 mt-auto">
                                <button
                                    onClick={() => handleEdit(post)}
                                    className="bg-yellow-500 hover:cursor-pointer hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                                >
                                    Edit
                                </button>

                                <button
                                    onClick={() => handleDelete(post.id)}
                                    className="bg-red-500 hover:cursor-pointer hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-600 text-lg">Loading posts...</p>
            )}
        </div>
    );
}

export default Posts;
