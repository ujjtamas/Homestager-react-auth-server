require("dotenv/config");
require("./db");
const express = require("express");
const { isAuthenticated } = require("./middleware/jwt.middleware");

const app = express();

require("./config")(app);

// 👇 Start handling routes here
const allRoutes = require("./routes");
app.use("/api", allRoutes);

/* const projectRouter = require("./routes/project.routes");
app.use("/api", isAuthenticated, projectRouter);
*/
const messageRouter = require("./routes/message.routes");
app.use("/message", messageRouter);

const authRouter = require("./routes/auth.routes");
app.use("/auth", authRouter);

const updateRouter = require("./routes/user.routes");
app.use("/user",updateRouter);

require("./error-handling")(app);

module.exports = app;