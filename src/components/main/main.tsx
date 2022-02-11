import Header from "../header/header";
import Footer from "../footer/footer";
import SubHeader from "../subHeader/subHeader";
import TopMessage from '../topMessage/topMessage';
import IssueList from "../issueList/issueList";
import { Query } from 'react-apollo';
import {GET_ISSUES} from '../../graphQL/query';
import Loading from '../loading/loading';
import IssueHeader from '../issueHeader/issueHeader';
import Pagination from '../pagination/pagination';
import { useState } from "react";
import {IssueHeaderData, PaginationProp, SubHeaderProp, pagination as dataSize} from '../../model/model'


const Main = (prop) => {

    const [cursor, setCursor] = useState(null);
    const [state, setState] = useState('CLOSED');

    const pagination = (cursor: string ) => {
        setCursor(cursor)
        
    }

    const issueState = (state: string) => {
        setState(state)
    }

return(
    <Query query={GET_ISSUES}  variables={{ number: dataSize.PageSize, state: state, cursor: cursor}}>
        {({data, loading}: {data:any, loading:boolean})=>{
            if(loading || !data){
                return <Loading/>
            }
            const {repository} = data;
            const {pageInfo, totalCount} = repository.issues;
            const isClosed = repository.issues.edges[0]?.node.closed;

            let issueHeaderData: IssueHeaderData = {
                isClosed,
                totalCount,
                issueState
            }
            let paginationProp: PaginationProp = {
                pageInfo,
                pagination
            }
            let subHeaderProp: SubHeaderProp = {
                totalCount,
                isClosed
            }

            return (
                <div>
                    <Header/>
                    <SubHeader count = {subHeaderProp}/>
                    <TopMessage/>
                    <IssueHeader data = {issueHeaderData} />
                    {repository.issues.edges.map((val: any, index: number) => <IssueList key={index} {...val} index={index + 1} />)}
                    <Pagination action = {paginationProp}/>
                    <Footer/>
                </div>
            )
        }}
    </Query>
    
)
}
export default Main