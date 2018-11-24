// let's go!
// tslint:disable-next-line:no-var-requires
require("dotenv").config({ path: "variables.env" });
import createServer from "./createServer";

const server = createServer();

// TODO: use express middleware to handle cookies
// TODO: use express middleware to populate current user

server.start({
    cors: {
        credentials: true,
        origin: process.env.FRONTEND_URL,
    },
    port: process.env.PORT,
}, (details) => {
    console.log(`Server is running on ${details.port}`);
});
