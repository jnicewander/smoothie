
export interface MasterlistResponse {
    id: string,
    fields: Fields,
    createdTime: string
}

export interface Fields {
    "Company Name": string,
    "Review Date": string,
    "Date Added": string,
    "Scout": string,
    "Company Website": string,
    "City": string,
    "Country": string,
    "Two Line Company Summary": string,
    "Alignment": string,
    "Theme(s)": string,
    "Technology Areas": string,
    "Uniqueness": string,
    "Team": string,
    "Raised": string
}