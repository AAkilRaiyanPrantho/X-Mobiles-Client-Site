import { Link } from "react-router-dom";
const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center mx-auto p-10 gap-4">
            <h1 className="text-6xl font-extrabold">Uh ohhhh!!!!</h1>
            <h2 className="text-4xl font-bold">Wrong Page</h2>
            <button className="btn btn-ghost outline outline-[#66FCF1] text-[#66FCF1]"><Link to='/'>Go Back</Link></button>
        </div>
    );
};

export default ErrorPage;