export interface ProjectsResponse {
    records: Records[]
}

export interface Records {
    id: string,
    fields: Fields,
    createdTime: string
}

export interface Fields {
    "Project Name": string,
    "Startup Engaged": string,
    "Partners Involved": string,
    "Project Summary": string,
    "Engagement Phase": string,
    "Engagement Progress": string,
    "Engagement Type": string,
    "Ongoing Status": string,
    "Project Lead": string,
    "First Engagement End Date": string,
    "Post-Engagement Maturity Score": string,
    "One Year Post Engagement Date": string,
    "Parnters Interested in Secondary Engagement": string,
    "Type of Engagement": string,
    "Post-Engagement Seamless Investment": string,
}