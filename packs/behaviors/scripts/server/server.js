var serverSystem = server.registerSystem(0, 0);

// Setup which events to listen for
serverSystem.initialize = function () {
    // set up your listenToEvents and register server-side components here.
    //serverSystem.listenForEvent("allinonetemplate:pinky", receivePinkyMessage);
    this.listenForEvent("minecraft:block_destruction_started", (eventData) => this.onPlayerBreakingBlock(eventData)); 
}
let tickcount=0;
// per-tick updates
serverSystem.update = function () {
    // Any logic that needs to happen every tick on the server.
    // Any logic that needs to happen every tick on the client.
    if(tickcount > 80){
        message("Hello Client")
        tickcount = 0;
    }else{
        tickcount ++;
    }

}

/**
 * whenever a player starts breaking a block, check the item 
 */
serverSystem.onPlayerBreakingBlock = function(eventData){
    message("Player "+ JSON.stringify(eventData.data["player"]) + " started breaking " + JSON.stringify(eventData.data["block_position"]))
}

function message(message)
{
    let eventData = serverSystem.createEventData("minecraft:display_chat_event");
    eventData.data.message = message;
    serverSystem.broadcastEvent("minecraft:display_chat_event",eventData);
}