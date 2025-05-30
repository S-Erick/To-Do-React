export default function FilterButtons({ filter, onChangeFilter}){
    return (
        <div className='filters'>
            <button className={filter === 'all' ? 'active' : ''} onClick={() => onChangeFilter('all')} >All</button>
            <button className={filter === 'active' ? 'active' : ''} onClick={() => onChangeFilter('active')} >Active</button>
            <button className={filter === 'completed' ? 'active' : ''} onClick={() => onChangeFilter('completed')} >Completed</button>
        </div>
    )
}