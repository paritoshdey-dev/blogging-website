import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);
    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPost(post);
                } else {
                    navigate("/");
                }
            });
        } else {
            navigate("/");
        }
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-12 bg-gray-50 min-h-screen">
            <Container>
                <div className="relative w-full flex justify-center mb-8">
                    {/* Post Image */}
                    {post.featuredImage ? (
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-xl max-h-[500px] object-cover w-full shadow-md"
                        />
                    ) : (
                        <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500 text-xl">
                            No image available
                        </div>
                    )}

                    {/* Author Controls */}
                    {isAuthor && (
                        <div className="absolute top-4 right-4 flex gap-2">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-600" className="hover:bg-green-700">
                                    Edit
                                </Button>
                            </Link>
                            <Button
                                bgColor="bg-red-600"
                                className="hover:bg-red-700"
                                onClick={deletePost}
                            >
                                Delete
                            </Button>
                        </div>
                    )}
                </div>

                {/* Post Title */}
                <div className="mb-6">
                    <h1 className="text-4xl font-extrabold text-gray-800 mb-4 text-center">
                        {post.title}
                    </h1>
                </div>

                {/* Post Content */}
                <div className="prose max-w-3xl mx-auto prose-lg prose-slate">
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ) : null;
}
