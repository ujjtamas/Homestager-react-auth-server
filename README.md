# Homestager

## App for homsestagers to register and show their portfolio

App for homestagers to register and show their portfolio

## User story

Homestager can regiter upload pictures and location information.
Registered Users can browse the uploaded portfolios and contact homestagers.

## Technologies used
-	Node.js
-	Express.js
-	MongoDB
-	Mongoose
-	ES6
-	Heroku
-	Axios
-	Cloudinary API
-	Google Maps Embed API
-	CSS
-	HTML


## Models
User
    const userSchema = new Schema({
        email: { type: String, unique: true, required: true },
        password: { type: String, required: true },
        name: { type: String, required: true },
        isHomestager: {type: boolean}
});

Homestager
    const homestagerSchema = new Schema({
        user: { type: Schema.Types.ObjectId, ref: "User" },
        contact: { type: String },
        description: { type: String },
        location: { type: Object },
        portfolio: [String]
});

Messages
    const messageSchema = new Schema({
        sender: { type: Schema.Types.ObjectId, ref: "User" },
        receiver: { type: Schema.Types.ObjectId, ref: "User" },
        answered: {type: Boolean},
        response: {type: Schema.Types.ObjectId, ref:"Message"},
        message: {type: Object}
    });

## Server routes
| Method | Route | Description |
|:-------------:|:---------------:|:-----------:|
| /login | POST | logs the user in. and redirects to homepage. |
| /verify | GET | verifies if user is authenticated. |
| /signup | POST | save the username encrypted password and other details. |
| /message/send | POST | save the message to the database. |
| /message/get/:_id | GET | fetch message from the database. |
| /user/upload | POST | upload link to picture stored in Cloudinary to the database. |
| /user/profile/:userid | GET | fetch details for user from the database. |
| /user/homestagers | GET | fetch details for all homestagers from the database. |
| /user/profile | POST | updates details for user in the database. |

## Project link
https://dashboard.heroku.com/apps/homestagers

## Future work
Add address field for google maps
Add link to images in browse route
Improve messaging interface

## Resources
https://my.ironhack.com/
https://developers.google.com/maps/documentation/embed/embedding-map
https://cloudinary.com/documentation

## Team members
Ujj Tamás