var serverSystem = server.registerSystem(0, 0);

// Setup which events to listen for
serverSystem.initialize = function () {
    // set up your listenToEvents and register server-side components here.
    //serverSystem.listenForEvent("allinonetemplate:pinky", receivePinkyMessage);
}
let tickcount=0;
// per-tick updates
serverSystem.update = function () {
    // Any logic that needs to happen every tick on the server.
    // Any logic that needs to happen every tick on the client.
    if(tickcount > 80){
        let eventData = this.createEventData("minecraft:display_chat_event");
        eventData.data.message = "Hello Client!";
        serverSystem.broadcastEvent("minecraft:display_chat_event",eventData);
        tickcount = 0;
    }else{
        tickcount ++;
    }

}