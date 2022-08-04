export type createCompetitionDTO = {
    competition_name: string,
    start_date: string,
    end_date: string
}

export type createCompetitionDB = createCompetitionDTO & { id_competition: string }

export type registerResultDardoDTO = {
    competition_name: string,
    athlete_name: string,
    highest_value: string,
    average_value: string,
    lowest_value: string,
    unity: string
}

export type registerResultsDB = registerResultDardoDTO & { id_athlete: string }

export type registerResultMRasosDTO = {
    competition_name: string,
    athlete_name: string,
    highest_value: string,
    unity: string
}

export type registerResultDB = registerResultMRasosDTO & { id_athlete: string }