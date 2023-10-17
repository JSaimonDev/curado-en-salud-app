import { Helmet } from "react-helmet-async";

const Seo = ({ title, description }:
    { title: string, description: string | undefined }
) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />
            { /* Facebook tags */}
            <meta property="og:type" content='summary' />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            { /* Twitter tags */}
            <meta name="twitter:creator" content='ViveOnFit' />
            <meta name="twitter:card" content='summary' />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    )
}


export default Seo;