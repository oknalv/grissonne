export default class Message {
    static FADE_TIMEOUT = 500;

    constructor(component, backgroundColor, buttonText, keep, callback, timeout){
        this.component = component;
        this.backgroundColor = backgroundColor;
        this.buttonText = buttonText;
        this.keep = keep === true;
        this.callback = callback;
        this.timeout = timeout;
        this.display = true;
    }
}