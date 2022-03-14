function Mobile(memory){
    this.memory = memory;
    this.sent = [];
    this.inbox = []
    
    this.useBattery = function(battery){
        this.battery = battery;
    }
    this.showEnergy = function(){
        return this.battery.getEnergy();
    }
    this.receiveMessage = function(msg){
        this.inbox.push(msg);
    }
    this.composeMessage = function(msg, receivePhone){
        this.sent.push(msg);
        receivePhone.receiveMessage(msg)
    }
    this.getSent = function(){
        return this.sent;
    }
    this.getInbox = function(){
        return this.inbox;
    }
}


function Battery(energy){
    this.energy = energy;
    this.getEnergy = function(){
        return this.energy;
    }
}

function Message(type, content){
    this.type = type;
    this.content = content;
}

let pin = new Battery(100);
let iP6 = new Mobile(1024)
iP6.useBattery(pin);
// console.log(iP6.showEnergy())
let p2 = new Battery(50);
let iP7 = new Mobile(2048);
iP6.composeMessage(new Message("ip6", "Nhậu không?"), iP7);
console.log(iP6.getSent())
console.log(iP7.getInbox())
iP7.composeMessage(new Message("ip7", "hết tiền, cho mượn 5 xị?"), iP6);
console.log(iP7.getSent())
console.log(iP6.getInbox())