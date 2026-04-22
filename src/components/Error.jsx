export default function Error() {
    return (
        <div className="flex flex-col items-center justify-center text-sm max-md:px-4 py-20">
            <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-white to-gray-500 bg-clip-text text-transparent">
                Picture Not Found
            </h1>
            <div className="h-px w-80 rounded bg-linear-to-r from-gray-400 to-gray-800 my-5 md:my-7"></div>
            <p className="md:text-xl text-gray-400 max-w-lg text-center">
                Hmm, that doesn't look like a real search. Try something like sunset beach or happy dog.
            </p>
            
        </div>
    );
};