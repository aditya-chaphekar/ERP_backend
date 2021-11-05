import dotenv from 'dotenv';
import path from 'path';
import "reflect-metadata";

const envInit = dotenv.config({
    // @ToDo remove all .env files and path should to the git ignored .env file only
    path: path.resolve(__dirname, '../../.env'),
    encoding: 'utf8',
});

if (envInit.error) {
    throw envInit.error;
}