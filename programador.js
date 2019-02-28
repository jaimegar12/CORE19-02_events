const EventEmitter = require('./events');
const later = require('./later');




class Programador extends EventEmitter {

    constructor(array) {
        super();


        this.array = array;

        for( var i=0; i<array.length;i++){
            const sched = later.parse.text(this.array[i].hora);
            later.setInterval(() => this.emit('ideal', this.array[i].temperatura), sched);

        }
    }




}

exports = module.exports = Programador;
