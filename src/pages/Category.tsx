import { useParams } from "react-router-dom";
import PostList from "../components/PostList";
import Seo from "../components/Seo";

const Category = () => {
    const PAGE_SIZE = 5
    const { category } = useParams()

    return (
        <main className="w-full flex flex-col justify-center h-full grow bg-greyBg items-center">
            <Seo
                description={`Artículos y recursos sobre ${category}. Encuentra información y consejos útiles para llevar una vida más saludable y activa.`}
                title={`Curado en salud - ${category}`}
            />
            <PostList pageSize={PAGE_SIZE} category={category} />
        </main>
    );
}

export default Category;