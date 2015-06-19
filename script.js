// Code goes here
$(function() {
    $("form#iCal-form").submit(function(e){
        e.preventDefault();
        return composeMessage()
    });
});

function composeMessage(){
    // init vars
    var userFullname  = "John Doe";
    var userEmail = $('#userEmail').val();
    var appointmentLocation = $('#appointmentLocation').val();
    var appointmentDateTime = $('#appointmentDateTime').val();
    var messageBody = $('#messageBody').val();
    var duration = 15;

   // console.log(appointmentDateTime);

    var startDateTime = moment(appointmentDateTime).format();
    //console.log(startDateTime);
    var endDateTime = moment(startDateTime).add(duration, 'minutes').format();
  //  console.log(endDateTime);
    // compose message.
    var icsMSG = 'BEGIN:VCALENDAR\n' +
        'VERSION:2.0\n' +
        'PRODID:-//Our Company//NONSGML v1.0//EN\n' +
        'BEGIN:VEVENT\n'+
        'UID:' + userEmail + '\n'+
        'DTSTAMP:' + moment().format() +'\n'+ // 20120315T170000Z
        'ATTENDEE;CN=' + userFullname + ';RSVP=TRUE:MAILTO:' + userEmail + '\n'+
        'ORGANIZER;CN=' + userFullname + ':MAILTO:' + userEmail + '\n'+
        'DTSTART:' + startDateTime + '\n'+
        'DTEND:' + endDateTime + '\n'+
        'LOCATION:' + appointmentLocation + '\n' +
        'SUMMARY: Appointment Scheduled \n'+
        'DESCRIPTION:' + messageBody + '\n'+
        'END:VEVENT\nEND:VCALENDAR';

    // output message
   // console.log(icsMSG);
    // create the file.
     window.open("Content-Type:text/calendar;charset=utf8," + escape(icsMSG));
}