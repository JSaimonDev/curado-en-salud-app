import { FetchedPost } from "../types"

const API_URL = import.meta.env.VITE_API_URL


export const getPostList = (pageSize: number = 5, page: number, category: string | undefined) => {
    console.log(API_URL)
    let getPostListUrl = `${API_URL}api/post?take=${pageSize}&skip=${page * pageSize}`
    if(category != undefined) getPostListUrl += `&category=${category}` 
    return fetch(getPostListUrl)
            .then(response => response.json())
        .then(data => {
                if (data.postList && Array.isArray(data.postList)) {
                    return data
                }
            })
}

export const getPost = (id: number, setPost: React.Dispatch<React.SetStateAction<FetchedPost | undefined>>) => {
    const getPostUrl = `${API_URL}api/post/${id}`
    fetch(getPostUrl)
        .then(response => response.json())
        .then(data => {
        setPost(data)
    })
}