import dotenv from "dotenv";
dotenv.config();

import container from "@app/inversify.config";
import TestGlobal from "@tests/global";

declare const global:TestGlobal;

global.container = container;
