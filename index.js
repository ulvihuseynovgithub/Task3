class Message{
    constructor(name,time,text){
        this.name=name;
        this.time=time;
        this.text=text;
    }

    toString(){
        return `${this.time} ${this.name}: ${this.text}`; 
    }
} 

class Messenger{
    constructor(){
        this.history=[];
    }

    gettime(){
        let now= new Date();
        return `${now.getHours()}:${now.getMinutes()}`;
    }
    send(name,text){
        this.history.push(new Message(name,this.gettime(),text));
    }
    show_history(){
        this.history.forEach(item=>console.log(item.toString()));
    }

}

let messenger = new Messenger()
function send(){
    const name = document.querySelector('.t1');
    const text = document.querySelector('.t2');
    const history = document.querySelector('.t3');

    history.value+=`${messenger.gettime()} ${name.value}: ${text.value}\n`;
    messenger.send(name.value,text.value);
}