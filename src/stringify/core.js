const core = require('../core.js');
const config = core.config.main.stringify;

function getEvent(entry) {
    let event_list = config.event.list;
    let event = config.event.id[entry.data.event];

    if (!config.event.list.includes(event))
        event = config.event.id.unsupported;

    return event;
}

function requireEvent(event) {
    return require(config.event.require.format(event));
}

function parseEvent(EventType, event_config, entry) {
    let parser = new EventType(event_config);
    return parser.parse(entry);
}

module.exports = (entry) => {
    let event = getEvent(entry);
    return parseEvent(requireEvent(event), event, entry);
};