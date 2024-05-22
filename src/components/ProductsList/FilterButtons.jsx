const FilterButtons = ({ setFilter }) => {
    return (
        <div className="flex gap-4 justify-center my-12">
            <button
                className='border-2 border-slate-900 py-2 px-4 hover:bg-slate-900 hover:text-slate-200 duration-300'
                onClick={() => setFilter('all')}>All</button>
            <button
                className='border-2 border-slate-900 py-2 px-4 hover:bg-slate-900 hover:text-slate-200 duration-300'
                onClick={() => setFilter('woman')}>Woman</button>
            <button
                className='border-2 border-slate-900 py-2 px-4 hover:bg-slate-900 hover:text-slate-200 duration-300'
                onClick={() => setFilter('man')}>Man</button>
            <button
                className='border-2 border-slate-900 py-2 px-4 hover:bg-slate-900 hover:text-slate-200 duration-300'
                onClick={() => setFilter('child')}>Child</button>
        </div>
    );
};
export default FilterButtons


