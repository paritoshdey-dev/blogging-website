import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config"
import { Container, PostCard } from '../components'

function Home() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
            setLoading(false)
        })
    }, [])

    if (loading) {
        return (
            <div className="flex items-center justify-center h-[70vh]">
                <h1 className="text-2xl font-semibold text-gray-700 animate-pulse">
                    Loading posts...
                </h1>
            </div>
        )
    }

    if (posts.length === 0) {
        return (
            <div className="flex items-center justify-center h-[70vh] text-center">
                <h1 className="text-2xl font-bold text-gray-600">
                    Please <span className="text-blue-600">log in</span> to view posts.
                </h1>
            </div>
        )
    }

    return (
        <div className="py-12 bg-gray-400 min-h-screen">
            <Container>
                <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
                    Latest Posts
                </h2>
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {posts.map((post) => (
                        <PostCard key={post.$id} {...post} />
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home
