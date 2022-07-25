export type createCompetitionDTO = {
    name: string,
    date: string,
    status_competition: string
}

export type createCompetitionDB = createCompetitionDTO & {id: string}