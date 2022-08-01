export type dogWalkDTO = {
    date: string,
    duration: string,
    latitude: string,
    longitude: string,
    pets: number,
    start_time: string,
    end_time: string
}

export type dogWalkDB = dogWalkDTO & { id: string, price: number, status: string }

