'use strict';
const { google } = require('googleapis');

const clientEmail = process.env.GOOGLE_CALENDAR_CLIENT_EMAIL;
const privateKey = process.env.GOOGLE_CALENDAR_PRIVATE_KEY;
const calendarId = process.env.GOOGLE_CALENDAR_CALENDAR_ID;

async function test() {
    const jwtClient = new google.auth.JWT(
        clientEmail,
        null,
        privateKey,
        ['https://www.googleapis.com/auth/calendar.readonly']
    );
    await jwtClient.authorize();

    const calendar = google.calendar('v3');
    const response = await calendar.events.list({
        calendarId,
        auth: jwtClient
    });

    console.log('events:', response.data.items);
}

test();
