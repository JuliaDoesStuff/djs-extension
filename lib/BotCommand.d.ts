import { Message } from "discord.js";
import BotClient from "./BotClient";

interface BotCommandOptions {
	name: string;
	description: string;
	aliases?: string[];
	usage: string;
	examples: string[];
	execute(client: BotClient, message: Message, args: string[]): void;
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

export = BotCommand;