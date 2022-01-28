import './pagination.css';

const Pagination = (prop)=> {  
    console.log(prop.action.pageInfo)
    return(
        <div className='pagination-buttons'>
            <button onClick={()=>prop.action.pagination(prop.action.pageInfo.startCursor)} className='previous' disabled={!prop.action.pageInfo.hasPreviousPage}>Previous</button>
            <button onClick={()=>prop.action.pagination(prop.action.pageInfo.endCursor)} className='next' disabled={!prop.action.pageInfo.hasNextPage}>Next</button>
        </div>
    )

}  
export default Pagination