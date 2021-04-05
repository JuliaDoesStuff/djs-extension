const { Client, Collection } = require("discord.js");
const fs = require("fs");
const path = require("path");

module.exports = class BotClient extends Client {
	constructor(token = "", options = { prefix: "!", commandCategories: false }) {
		super(options);

		this.token = token;
		this.prefix = options.prefix;
		this.commands = new Collection();

		if (typeof options.commandFolder != "undefined") {
			let command;
			for (const c of options.commandCategories ? fs.readdirSync(options.commandFolder) : fs.readdirSync(options.commandFolder).filter(f => f.endsWith(".js"))) {
				if (options.commandCategories) {
					for (const cmd of fs.readdirSync(path.resolve(options.commandFolder, c)).filter(f => f.endsWith(".js"))) {
						command = require(path.resolve(options.commandFolder, c, cmd));

						this.commands.set(command.name, command);
					}
				} else {
					command = require(path.resolve(options.commandFolder, c));

					this.commands.set(command.name, command);
				}
			}
		}

		if (typeof options.eventFolder != "undefined") {
			for (const e of fs.readdirSync(options.eventFolder).filter(f => f.endsWith(".js"))) {
				let event = require(path.resolve(options.eventFolder, e));

				this.on(event.name, event.listener.bind(null, this));
			}
		}
	}

	login() {
		super.login(this.token);
	}
}