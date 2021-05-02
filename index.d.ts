import Discord from "discord.js";
import BotClient from "./lib/BotClient";
import BotCommand from "./lib/BotCommand";
import BotEvent from "./lib/BotEvent";

declare class Client extends BotClient {}
declare class Command extends BotCommand {}
declare class Event extends BotEvent {}

export {
	Client,
	Command,
	Discord,
	Event
}