import './issueHeader.css';
import Loading from '../loading/loading';
import { IssueHeaderData } from '../../model/model';

interface _IssueHeaderData {
    data: IssueHeaderData
}

const IssueHeader = (prop: _IssueHeaderData) => {
    if(!prop){
        return <Loading/>
    }
    return (
        <div>
            <div className='IssueHeader'>
                <div className='header'>
                    <span data-testid='open' onClick={()=>prop.data.issueState('OPEN')} className={prop.data.isClosed === false? 'open active' : 'open'}><i className="far fa-dot-circle"></i> {prop.data.isClosed === false? `${prop.data.totalCount} Open` : '492 Open'}</span>
                    <span data-testid='closed' onClick={()=>prop.data.issueState('CLOSED')} className={prop.data.isClosed === true? 'closed active' : 'closed'}><i className="fas fa-check"></i> {prop.data.isClosed === true? `${prop.data.totalCount} Closed` : '673 Closed'}</span>
                    <span data-testid='author' className='author'>Author <i className="fas fa-caret-down"></i></span>
                    <span className='label'>Label <i className="fas fa-caret-down"></i></span>
                    <span className='projects'>Projects <i className="fas fa-caret-down"></i></span>
                    <span className='milestones'>Milestones <i className="fas fa-caret-down"></i></span>
                    <span className='assignee'>Assignee <i className="fas fa-caret-down"></i></span>
                    <span className='sort'>Sort <i className="fas fa-caret-down"></i></span>
                </div>
            </div>
        </div>
    )
}
export default IssueHeader