import { ClientEvents } from "discord.js";
import BotClient from "./BotClient";

interface BotEventOptions<K extends keyof ClientEvents> {
	name: K;
	listener(client: BotClient, ...args: ClientEvents[K]): void;
}

declare class BotEvent {
	constructor(options: BotEventOptions<keyof ClientEvents>);

	public name: string;
	public listener(client: BotClient, ...args: any[]): void;
}

export = BotEvent;