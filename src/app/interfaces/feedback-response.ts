export interface FeedbackResponse {
    records: FeedbackRecords[]
}

export interface FeedbackRecords {
    id: string,
    fields: FeedbackFields,
    createdTime: string
}

export interface FeedbackFields {
    "Intro Date": string,
    "Startup": string,
    "Your Organization": string,
    "Alignment to your organization": string,
    "Uniqueness of Tech": string,
    "Team Strength": string,
    "Business Potential": string,
    "Level of Interest in Project": string,
    "Questions": string
}