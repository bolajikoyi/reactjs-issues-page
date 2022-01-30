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


const Main = (prop: any) => {

    const [cursor, setCursor] = useState(null);
    const [state, setState] = useState('CLOSED');

    const pagination = (cursor: string ) => {
        console.log(cursor)
        setCursor(cursor)
        
    }

    const issueState = (state: string) => {
        setState(state)
        console.log(state)
    }

    console.log(cursor)

return(
    <Query query={GET_ISSUES}  variables={{ number:30, state: state, cursor: cursor}}>
        {({data, loading}: {data:any, loading:boolean})=>{
            if(loading || !data){
                return <Loading/>
            }
            const {repository} = data;
            const {pageInfo, totalCount} = repository.issues;
            const isClosed = repository.issues.edges[0]?.node.closed;
            let issueHeaderData = {
                isClosed,
                totalCount,
                issueState
            }
            let paginationProp = {
                pageInfo,
                pagination
            }
            let subHeaderProp = {
                totalCount,
                isClosed
            }
            console.log(isClosed)
            console.log(repository)
            return (
                <div>
                    <Header/>
                    <SubHeader count = {subHeaderProp}/>
                    <TopMessage/>
                    <IssueHeader data = {issueHeaderData} />
                    {repository.issues.edges.map((val: any, index: number) => <IssueList key={index} {...val} />)}
                    <Pagination action = {paginationProp}/>
                    <Footer/>
                </div>
            )
        }}
    </Query>
    
)
}
export default Main