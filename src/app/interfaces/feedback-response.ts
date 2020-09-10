export interface FeedbackResponse {
    records: Records[]
}

export interface Records {
    id: string,
    fields: Fields,
    createdTime: string
}

export interface Fields {
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