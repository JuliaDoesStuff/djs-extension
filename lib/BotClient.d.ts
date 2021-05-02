import { Client, ClientOptions, Collection } from "discord.js";
import BotCommand from "./BotCommand";

interface BotClientOptions extends ClientOptions {
	prefix: string;
	commandFolder: string | Buffer | URL;
	eventFolder: string | Buffer | URL;
	commandCategories: boolean;
}

declare class BotClient extends Client {
	constructor(token: string, options: BotClientOptions);

	public token: string;
	public prefix: string;
	public commands: Collection<string, BotCommand>;

	public login(): Promise<string>;
}

export = BotClient;