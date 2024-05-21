

function Button({ onClick }) {
    return (
        <button
            className="bg-slate-900 text-slate-200 shadow-md py-2 px-4 mt-8 border-2 hover:bg-slate-200 hover:text-slate-900 hover:border-slate-900 duration-300"
            onClick={onClick}>
            Shop Now

        </button>
    )
}
export default Button