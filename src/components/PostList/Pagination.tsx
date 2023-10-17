const Pagination = ({ page, numberOfPages, setPage, className }:
    { page: number, numberOfPages: number, setPage: React.Dispatch<React.SetStateAction<number>>, className?: string }) => {
    return (
        <div className={`w-[100px] flex ${className}`}>
            <div className={`basis-1/3 justify-center flex ${page < numberOfPages - 1 && 'cursor-pointer'}`} onClick={() => setPage(page - 1)}>
                {page > 0 && '<'}
            </div>
            <div className="basis-1/3 justify-center flex">
                {page + 1}
            </div>
            <div className={`basis-1/3 justify-center flex ${page < numberOfPages - 1 && 'cursor-pointer'}`} onClick={() => setPage(page + 1)}>
                {page < numberOfPages - 1 && '>'}
            </div>
        </div>
    );
}

export default Pagination;