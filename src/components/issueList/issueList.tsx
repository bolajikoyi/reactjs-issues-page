import React, {useEffect, useState, } from 'react';
import './issueList.css';
import Loading from '../loading/loading';
import { issueList } from '../../model/model';


const IssueList = (prop: issueList) => {
    const [hoverState, setHoverState] = useState(false)
    console.log(prop)

    if(!prop){
        return <Loading/>
    }
    

    return (
        <div>{prop.node?.title? 
            <div className={hoverState? 'issues-body hover' : 'issues-body'} onMouseEnter={()=>setHoverState(true)} onMouseLeave={()=>setHoverState(false)}>
                <div className='issues-list'>
                    <span><i className={!prop.node.closed? "far fa-dot-circle":"far fa-check-circle"}></i></span>
                    <span className='title'><a href={prop.node?.url} target={'_blank'} rel="noreferrer">{prop.node?.title}</a></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span>{prop.node?.comments.totalCount > 0 ? <span><i className="far fa-comment-alt"></i> {prop.node?.comments.totalCount}</span> : null}</span>
                </div>
                <div className='additional-info'>
                    #{prop.node?.number} by <a href={prop.node?.author?.url? prop.node?.author?.url : 'https://github.com/reactjs/reactjs.org/issues'} target={'_blank'} rel="noreferrer">{(prop.node?.author?.name)?? 'User'}</a> was updated on {prop.node?.updatedAt.split('T')[0].split('-').reverse().join('-')} at {prop.node?.updatedAt.split('T')[1].slice(0, 8)}.
                </div>
            </div> : null
        
        }
            
        </div>
    )
}
export default IssueList
