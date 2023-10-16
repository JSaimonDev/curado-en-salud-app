import DOMPurify from "dompurify";
import { FetchedPost } from "../../types";
import { Link } from "react-router-dom";
import { toFirstLetterCapital } from "../../utils";

interface PostCardProps {
    post: FetchedPost
    className?: string
}

const PostCard = ({ post, className }: PostCardProps) => {
    const noQuoteContent = post.content.replace(/^"|"$/g, '')
    return (
        <Link to={`post/${post.id}`} className="w-full">
            <article className={`${className} w-full flex md:flex-row flex-col-reverse gap-6 overflow-hidden md:aspect-[9/2] line-clamp-3`}>
                <div className="md:basis-2/3 flex flex-col lg:gap-y-3 md:gap-y-[1.2vw] gap-y-2">
                    <p className="text-main font-bold lg:text-base md:text-[1.7vw] md:leading-[3.2vw] text-base">
                        {toFirstLetterCapital(post.category.name)}
                    </p>
                    <h2 className="lg:text-3xl md:text-[3.3vw] md:leading-[3.8vw] text-3xl">
                        {toFirstLetterCapital(post.title)}
                    </h2>
                    <div>
                        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(noQuoteContent) }}
                            className=" line-clamp-5 sm:line-clamp-4 md:line-clamp-3 lg:text-base md:text-[1.75vw] md:leading-[2.7vw] text-sm" />
                    </div>
                </div>
                <div className="md:basis-1/3">
                    <img src={post.featuredImage} alt={post.altFeaturedImage} width={660} height={440} />
                </div>
            </article>
        </Link>
    );
}

export default PostCard;