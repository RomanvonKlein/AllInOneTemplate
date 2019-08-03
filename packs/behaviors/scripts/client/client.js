var clientSystem = client.registerSystem(0, 0);

// Setup which events to listen for
clientSystem.initialize = function () {
    // set up your listenToEvents and register client-side components here.
}

let tickcount = 40;
// per-tick updates
clientSystem.update = function() {
    // Any logic that needs to happen every tick on the client.
    if(tickcount > 80){
        let eventData = this.createEventData("minecraft:display_chat_event");
        eventData.data.message = "Hello Server!";
        clientSystem.broadcastEvent("minecraft:display_chat_event",eventData);
        tickcount = 0;
    }else{
        tickcount ++;
    }
}
