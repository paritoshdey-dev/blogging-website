import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {
    return (
        <Link to={`/post/${$id}`}>
            <div className="w-full bg-slate-300 rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-full flex justify-center items-center mb-4 overflow-hidden rounded-xl">
                    <img 
                        src={appwriteService.getFilePreview(featuredImage)} 
                        alt={title}
                        className="rounded-xl object-cover h-48 w-full"
                    />
                </div>
                <h2 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300 text-center">
                    {title}
                </h2>
            </div>
        </Link>
    )
}

export default PostCard
