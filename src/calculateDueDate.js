/**
  * @desc Calculate due date from a submit date and turnaround time based on work availability hours
  * @param <Date> submitDate
  * @param <Number> turnAround
  * @return <Date> duaDate
*/

function calculateDueDate (submitDate, turnAround) {
    'use strict';
    const availabilityPerDays = [0, 8, 8, 8, 8, 8, 0];
    const workStartHour = 9;
    const workEndHour = 17;

    var dueDate = submitDate;

    var daysPassed = 0;
    var hoursToAllocate = turnAround + ( submitDate.getHours() - workStartHour );

    var dayOfWeek = submitDate.getDays()

    while (hoursToAllocate > 0 ) {
        hoursToAllocate = hoursToAllocate - availabilityPerDays[dayOfWeek];
        dayOfWeek = ++dayOfWeek % 7;
        daysPassed++;
    }

    // We have the due day
    dueDate.setDate( dueDate.getDate() + (daysPassed-1) );

    // We have the due hour
    dueDate.setHours( workEndHour + hoursToAllocate );

    return dueDate();

};

module.exports = {
  calculateDueDate
};