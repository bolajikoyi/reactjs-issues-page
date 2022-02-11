export interface IssueHeaderData {
    isClosed: boolean,
    totalCount: number,
    issueState: any

}
export interface PaginationProp {
    pageInfo: {
        endCursor: string,
        hasNextPage: boolean,
        hasPreviousPage: boolean,
        startCursor: string
    },
    pagination: any

}
export interface SubHeaderProp {
    totalCount: number,
    isClosed: boolean
}

export interface issueList {
    index: number
    node?: {
        author: {
            name: string,
            url: string,
        },
        closed: boolean,
        comments: {
            totalCount: number
        },
        number: number,
        title: string,
        updatedAt: string,
        url: string,

    }
}

export enum pagination {
    PageSize = 30,
}