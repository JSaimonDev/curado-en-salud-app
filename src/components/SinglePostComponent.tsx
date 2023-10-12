import DOMPurify from "dompurify";
import { FetchedPost } from "../types";
import { toFirstLetterCapital } from "../utils";

interface SinglePostProps {
    post: FetchedPost
    className?: string
}

const SinglePost = ({ post, className }: SinglePostProps) => {
    const noQuoteContent = post.content.replace(/^"|"$/g, '')
    return (
        <main className="h-full flex justify-center">
            <article className={`${className} h-full w-full flex flex-col-reverse gap-6 max-w-[700px] py-10 px-4`}>
                <div className="h-full md:basis-2/3 flex flex-col lg:gap-y-3 md:gap-y-[1.2vw] gap-y-2">
                    <p className="text-main font-bold lg:text-base md:text-[1.7vw] md:leading-[3.2vw] text-base">
                        {toFirstLetterCapital(post.category.name)}
                    </p>
                    <h2 className="lg:text-3xl md:text-[3.3vw] md:leading-[3.8vw] text-2xl sm:text-3xl">
                        {toFirstLetterCapital(post.title)}
                    </h2>
                    <div>
                        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(noQuoteContent) }}
                            className="content" />
                    </div>
                </div>
                <div className="md:basis-1/3">
                    <img src={post.featuredImage} alt={post.altFeaturedImage} />
                </div>
            </article>
        </main>
    );
}

export default SinglePost;