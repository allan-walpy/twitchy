const core = require('../../../core.js');
const guilds_config = core.app.bot.discord.guild;

class ValueEmojieCommand {

    static call(data) {
        let guild_config = guilds_config[data.channel.guild.id];
        if (!guild_config)
            return;

        let value = data.config.value;
        guild_config.config.emojie.mode = value;
        guild_config.update();
        data.channel.send(data.config.reply.format(data));
    }

}

module.exports = ValueEmojieCommand;