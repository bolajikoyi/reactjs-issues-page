import Header from "./header";
import Footer from "./footer";
import SubHeader from "./subHeader";
import TopMessage from './topMessage';
import IssueList from "./issueList";
import { Query } from 'react-apollo';
import {GET_ISSUES} from '../graphQL/query';
import Loading from './loading';
import IssueHeader from './issueHeader';
import Pagination from './pagination';
import { useEffect, useState } from "react";


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
    <Query query={GET_ISSUES}  variables={{ number:20, state: state, cursor: cursor}}>
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
            console.log(isClosed)
            console.log(repository)
            return (
                <div>
                    <Header/>
                    <SubHeader count = {totalCount}/>
                    <TopMessage/>
                    <IssueHeader data = {issueHeaderData} />
                    {repository.issues.edges.map((val: any, index: number) => <IssueList key={index} {...val}/>)}
                    <Pagination action = {paginationProp}/>
                    <Footer/>
                </div>
            )
        }}
    </Query>
    
)
}
export default Main