export interface IssueHeaderData {
    isClosed: Boolean,
    totalCount: Number,
    issueState: any

}
export interface PaginationProp {
    pageInfo: {
        endCursor: String,
        hasNextPage: Boolean,
        hasPreviousPage: Boolean,
        startCursor: String
    },
    pagination: any

}
export interface SubHeaderProp {
    totalCount: Number,
    isClosed: String
}

export interface issueList {
    node?: {
        author: {
            name: String,
            url: string,
        },
        closed: Boolean,
        comments: {
            totalCount: Number
        },
        number: Number,
        title: String,
        updatedAt: String,
        url: string,

    }
}