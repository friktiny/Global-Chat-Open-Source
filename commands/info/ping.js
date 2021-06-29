module.exports = {
    name: "ping",
    category: "info",
    description: "Returns latency and API ping",
    usage: "",
    run: async (client, message, args) => {
       message.channel.send(`Pong - ${client.ws.ping}ms`)
    }
}