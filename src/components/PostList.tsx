import { useEffect, useState } from "react";
import PostCard from "./PostList/PostCard";
import { FetchedPost } from "../types";
import { getPostList } from "../services/postServices";
import Pagination from "./PostList/Pagination";

const PostList = ({ pageSize, category }: { pageSize: number, category?: string }) => {
    const [postList, setPostList] = useState<FetchedPost[]>([])
    const [page, setPage] = useState(0)
    const [numberOfPages, setNumberOfPages] = useState(1)

    useEffect(() => {
        const gettingData = async () => {
            const data = await getPostList(pageSize, page, category) as { postList?: FetchedPost[], numberOfPages?: number }
            if (data.postList && Array.isArray(data.postList)) setPostList(data.postList)
            if (data.numberOfPages != undefined && typeof numberOfPages === 'number') setNumberOfPages(data.numberOfPages)
        }
        gettingData()
    }, [page, numberOfPages, pageSize, category])

    return (

        <div className="customContainer flex flex-col gap-6 bg-white p-6 md:p-16 h-full justify-center items-center">
            {postList
                && postList.length > 0
                && postList.map((post, index) => {
                    return (
                        <div key={post.id} className="w-full">
                            <PostCard post={post} className="mb-5 w-full" />
                            {index < postList.length - 1 && <hr />}
                        </div>
                    )
                })
            }
            <Pagination page={page} numberOfPages={numberOfPages} setPage={setPage} />
        </div>
    );
}

export default PostList