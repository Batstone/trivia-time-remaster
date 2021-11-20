class Player {
    constructor(id, name, avatar, questions = [], score = 0) {
        this.id = id;
        this.name = name;
        this.avatar = avatar;
        this.questions = questions;
        this.score = score;
    }
};

export default Player;