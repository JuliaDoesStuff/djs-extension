const BotClient = require("./lib/BotClient");
const BotCommand = require("./lib/BotCommand");
const BotEvent = require("./lib/BotEvent");

module.exports = class Bot {
	static Client = BotClient;
	static Command = BotCommand;
	static Discord = require("discord.js");
	static Event = BotEvent;
}