export enum POST_TYPES {
    NORMAL = "NORMAL",
    EVENT = "EVENT"
}

export class Post {
    constructor(
        private id: string,
        private photo: string,
        private description: string,
        private creation_date: string,
        private type: POST_TYPES,
        private user_id: string
    ) { }
    // getId() {
    //     return this.id
    // }
    // getPhoto() {
    //     return this.photo
    // }
    // getDescription() {
    //     return this.description
    // }
    // getCreationDate() {
    //     return this.creation_date
    // }
    // getType() {
    //     return this.type
    // }
    // getUserId() {
    //     return this.user_id
    // }
}