
export default class Group{
    constructor(name){
        this.name = name;
        this.scheduleMatrix = [];
    }
    
    schedulesCrash(schedule){
        for(let i = 0; i < schedule.length; i++){
            for(let j = 0; j < schedule[i].length; j++){
                if(this.scheduleMatrix[i][j] == 1 && schedule[i][j] == 1){
                    return true;
                }
            }
        }
        return false;
    }

    static generateSchedule(subjects){
        //Subjects is an array of Subject objects
        let schedule = new Schedule();
        for(let i = 0; i < subjects.length; i++){
            let subject = subjects[i];
            for(let group in subject.groups){
                let groupSchedule = subject.groups[group];
                if(schedule.schedulesCrash(groupSchedule)){
                    return null;
                }
                schedule.scheduleMatrix = schedule.mergeSchedules(schedule.scheduleMatrix, groupSchedule);
            }
        }
    }

    mergeSchedules(schedule1, schedule2){
        let newSchedule = [];
        for(let i = 0; i < schedule1.length; i++){
            newSchedule[i] = [];
            for(let j = 0; j < schedule1[i].length; j++){
                newSchedule[i][j] = schedule1[i][j] || schedule2[i][j];
            }
        }
        return newSchedule;
    }
}