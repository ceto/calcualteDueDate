/**
  * @desc Calculate due date from a submit date and turnaround time based on work availability hours
  * @param <Date> submitDate
  * @param <Number> turnAround
  * @return <Date> duaDate or boolean false
*/

module.exports = function (submitDate, turnAround) {
    'use strict';
    const availabilityPerDays = [0, 8, 8, 8, 8, 8, 0 ];
    const workStartHour = 9;
    const workEndHour = 17;

    function inputsAreValid(submitDateToValidate, turnaroundTimeToValidate) {
        return true;
    }

    if ( inputsAreValid(submitDate, turnAround) ) {
        var dueDate = submitDate;


        var daysPassed = 0;
        var hoursToAllocate = turnAround + ( submitDate.getHours() - workStartHour );

        var dayOfWeek = submitDate.getDay();


        while (hoursToAllocate > 0 ) {
            hoursToAllocate = hoursToAllocate - availabilityPerDays[dayOfWeek];
            dayOfWeek = ++dayOfWeek % 7;
            daysPassed++;
        }

        console.log('Input: ' + dueDate);

        // We have the due day
        dueDate.setDate( dueDate.getDate() + (daysPassed-1) );


        // We have the due hour
        dueDate.setHours(parseInt( workEndHour + hoursToAllocate) );

        console.log('Output: ' + dueDate);



        return dueDate;
    } else {
        return false;
    }


};

