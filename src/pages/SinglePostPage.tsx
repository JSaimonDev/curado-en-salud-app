import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPost } from "../services/postServices";
import { type FetchedPost } from "../types";
import SinglePostComponent from "../components/SinglePostComponent";
import Seo from "../components/Seo";

const IndividualPost = () => {
    const [post, setPost] = useState<FetchedPost>()
    const id = Number(useParams().id)

    useEffect(() => {
        id && getPost(id, setPost)
    }, [id])

    return (
        <div className="h-full">
            <Seo
                description={post?.description}
                title={`Sano Sanote - ${post?.title}`}
            />
            {post
                ? <SinglePostComponent post={post} />
                : 'Loading'
            }
        </div>
    );
}

export default IndividualPost;