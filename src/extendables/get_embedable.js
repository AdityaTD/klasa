const { Extendable } = require('../index');

module.exports = class extends Extendable {

	constructor(...args) {
		super(...args, 'embedable', ['GroupDMChannel', 'DMChannel', 'TextChannel']);
	}

	get extend() {
		if (!this.guild) return true;
		return this.postable && this.permissionsFor(this.guild.me).has('EMBED_LINKS');
	}

};
