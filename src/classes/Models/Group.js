import Schedule from './Schedule.js';

export default class Group{
    name;
    schedule;
    constructor(name){
        this.name = name;
        this.schedule = new Schedule();
    }
}