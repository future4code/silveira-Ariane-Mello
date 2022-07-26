export type createCompetitionDTO = {
    competition_name: string,
    start_date: string,
    end_date: string
}

export type createCompetitionDB = createCompetitionDTO & { id_competition: string }

export type registerResultsDTO = {
    competition_name: string,
    athlete_name: string,
    value: string,
    unity: string
}

export type registerResultsDB = registerResultsDTO & { id_athlete: string }