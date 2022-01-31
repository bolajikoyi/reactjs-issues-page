import './pagination.css';
import { PaginationProp } from '../../model/model';

interface _PaginationProp {
    action: PaginationProp
}

const Pagination = (prop: _PaginationProp)=> {

    return(
        <div className='pagination-buttons'>
            <button onClick={()=> prop.action.pagination(prop.action.pageInfo.startCursor)} 
                className='previous'
                disabled={!prop.action.pageInfo.hasPreviousPage}>
                <i className="fas fa-less-than"></i> Previous
            </button>
            <button onClick={()=>prop.action.pagination(prop.action.pageInfo.endCursor)}
                className='next'
                disabled={!prop.action.pageInfo.hasNextPage}>Next <i className="fas fa-greater-than"></i>
            </button>
        </div>
    )

}  
export default Pagination

