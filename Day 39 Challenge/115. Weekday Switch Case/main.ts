// Question 115: Use a switch statement to log the days of the week based on a number (1-7).

// Explain & TIP: A switch statement is a great way to select one of many code blocks to be executed. It's particularly useful for scenarios like mapping numbers to days of the week.

function weekDays(dayIndex:number) {
switch (dayIndex) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;

    default:
        console.log('Invalid day index');
        break;
}
}
weekDays(4);
weekDays(5);
weekDays(6);
weekDays(7);
weekDays(8);