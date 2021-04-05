import { DiscordJS } from "discord.js";
import { Client, ClientEvents, ClientOptions, Collection, Message } from "discord.js";

declare class Bot {
	static Client: typeof BotClient;
	static Command: typeof BotCommand;
	static Discord: typeof DiscordJS;
	static Event: typeof BotEvent;
}

interface BotClientOptions extends ClientOptions {
	prefix: string;
	commandFolder: string | Buffer | URL;
	eventFolder: string | Buffer | URL;
	commandCategories: boolean;
}

interface BotCommandOptions {
	name: string;
	description: string;
	aliases?: string[];
	usage: string;
	examples: string[];
	execute(client: BotClient, message: Message, args: string[]): void;
}

interface BotEventOptions<K extends keyof ClientEvents> {
	name: K;
	listener(client: BotClient, ...args: ClientEvents[K]): void;
}

declare class BotClient extends Client {
	constructor(token: string, options: BotClientOptions);

	public token: string;
	public prefix: string;
	public commands: Collection<string, BotCommand>;

	public login(): Promise<string>;
}

declare class BotCommand {
	constructor(options: BotCommandOptions);

	public name: string;
	public description: string;
	public aliases?: string[];
	public usage: string;
	public examples: string[];

	public execute(client: BotClient, message: Message, args: string[]): void;
}

declare class BotEvent<K extends keyof ClientEvents> {
	constructor(options: BotEventOptions<K>);

	public name: K;
	public listener(client: BotClient, ...args: ClientEvents[K]);
}

export = Bot;