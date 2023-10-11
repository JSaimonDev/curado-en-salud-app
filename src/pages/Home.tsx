import PostList from "../components/PostList";
import Seo from "../components/Seo";

const PAGE_SIZE = 5

const Home = () => {
    return (
        <main className="w-full flex justify-center h-full">
            <Seo
                description="Vive más, vive mejor. Todo lo que necesitas saber sobre salud, nutrición y fitness."
                title="Sano Sanote"
            />
            <PostList pageSize={PAGE_SIZE} />
        </main>
    )
}

export default Home;