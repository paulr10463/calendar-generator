
export default class Group {
    constructor(SubjectName, GRName) {
        this.subjectName = SubjectName;
        this.groupName = GRName;
        this.scheduleMatrix = [
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
          ];
    }

    schedulesCrash(otherSchedule) {
        if (this.scheduleMatrix.length !== otherSchedule.length) {
            return false;
        }
        for (let i = 0; i < this.scheduleMatrix.length; i++) {
            for (let j = 0; j < this.scheduleMatrix[i].length; j++) {
                if (this.scheduleMatrix[i][j] && otherSchedule[i][j]) {
                    return true;
                }
            }
        }
        return false;
    }

    mergeSchedules(schedule2) {
        let newSchedule = [];
        for (let i = 0; i < this.scheduleMatrix.length; i++) {
            newSchedule[i] = [];
            for (let j = 0; j < this.scheduleMatrix[i].length; j++) {
                newSchedule[i][j] = this.scheduleMatrix[i][j] || schedule2[i][j];
            }
        }
        return newSchedule;
    }
}