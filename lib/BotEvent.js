module.exports = class BotEvent {
	constructor(options = {}) {
		this.name = options.name;
		this.listener = options.listener;
	}
}