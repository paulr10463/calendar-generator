import Schedule from './Schedule.js';

export default class Group{
    constructor(name){
        this.name = name;
        this.schedule = new Schedule();
    }
}