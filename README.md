# Homestager

## Online darts game for 2 players

Online game where you can challenge and play other players, registration required.

### User story

As a darts enthusiast I would like to play online as well with anyone around the world.

#### Tasks

## Models
User
    user data (username, password)
    const userSchema = new Schema({
        email: { type: String, unique: true, required: true },
        password: { type: String, required: true },
        name: { type: String, required: true }
});

Homestager
    const homestagerSchema = new Schema({
        email: { type: String, unique: true, required: true },
        password: { type: String, required: true },
        name: { type: String, required: true },
        contact: { type: String, required: true },
        description: { type: String, required: true },
        location: { type: Object, required: true },
        portfolio: {[type: String]}
});

Messages
    const messageSchema = new Schema({
        user: { type: Schema.Types.ObjectId, ref: "User" },
        homestager: { type: Schema.Types.ObjectId, ref: "homestager" },
        message: {[type: String]}
    });