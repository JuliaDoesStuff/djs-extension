const BotClient = require("./lib/BotClient");
const BotCommand = require("./lib/BotCommand");
const BotEvent = require("./lib/BotEvent");

module.exports = {
	Client: BotClient,
	Command: BotCommand,
	Discord: require("discord.js"),
	Event: BotEvent
}