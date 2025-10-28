import React, { useEffect, useState } from "react";
import { postData } from "../api/PostApi";

function Form({ data, setData, updateData, setUpdateData, onUpdatePost }) {
    const [addData, setAddData] = useState({
        title: "",
        body: ""
    });

    useEffect(() => {
        if (updateData) {
            setAddData({
                title: updateData.title || "",
                body: updateData.body || ""
            });
        }
    }, [updateData]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAddData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const addPostData = async () => {
        try {
            const res = await postData(addData);
            if (res.status === 201 || res.status === 200) {
                setData([...data, res.data]);
                setAddData({ title: "", body: "" });
            }
        } catch (error) {
            console.error("Error adding post:", error);
        }
    };

    const updatePostData = async () => {
        try {
            const res = await onUpdatePost(updateData.id, addData);
            if (res.status === 200) {
                setData((prevData) =>
                    prevData.map((post) =>
                        post.id === updateData.id ? res.data : post
                    )
                );
                setAddData({ title: "", body: "" });
                setUpdateData(null);
            }
        } catch (error) {
            console.error("Error updating post:", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (updateData) {
            await updatePostData();
        } else {
            await addPostData();
        }
    };

    return (
        <div className="w-full flex justify-center mt-8 mb-10">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-center gap-7 bg-white shadow-lg rounded-xl p-6 w-full max-w-3xl"
            >
                <input
                    type="text"
                    name="title"
                    placeholder="Add Title"
                    autoComplete="off"
                    value={addData.title}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-1/3 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm transition-all"
                />

                <input
                    type="text"
                    name="body"
                    placeholder="Add Post"
                    autoComplete="off"
                    value={addData.body}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-1/3 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm transition-all"
                />

                <button
                    type="submit"
                    className={`${updateData
                            ? "bg-yellow-500 hover:bg-yellow-600"
                            : "bg-indigo-600 hover:bg-indigo-700"
                        } text-white font-semibold py-2 px-8 rounded-lg transition-all duration-300 shadow-md`}
                >
                    {updateData ? "Update Post" : "Add Post"}
                </button>
            </form>
        </div>
    );
}

export default Form;
