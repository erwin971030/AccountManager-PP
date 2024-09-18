import { envs } from './config/envs';
import { Server } from './presentation/server';

function main() {
    const server = new Server({port: envs.PORT})
    server.start();
}

(async() => {
    main();
})();