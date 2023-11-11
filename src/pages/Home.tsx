import PostList from "../components/PostList";
import Seo from "../components/Seo";

const PAGE_SIZE = 5

const Home = () => {
    return (
        <main className="w-full flex flex-col justify-center h-full grow bg-greyBg items-center">
            <Seo
                description="Vive más, vive mejor. Todo lo que necesitas saber sobre salud, nutrición y fitness."
                title="Curado en salud"
            />
            <PostList pageSize={PAGE_SIZE} />
        </main>
    )
}

export default Home;