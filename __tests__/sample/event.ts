import { calendar_v3 } from "googleapis";

const event: calendar_v3.Schema$Event = {
  kind: "calendar#event",
  etag: "\"3156279976436000\"",
  id: "47vle5jario2uhsc34mk1haiep",
  status: "confirmed",
  htmlLink: "https://www.google.com/calendar/event?eid=NDd2bGU1amFyaW8ydWhzYzM0bWsxaGFpZXAgdHdpdGNoLmhvc3Rpbmcuc3JAbQ",
  created: "2020-01-04T12:13:08.000Z",
  updated: "2020-01-04T12:13:08.218Z",
  summary: "an_awesome_streamer\n\nblabla",
  creator: { email: "***", self: true },
  organizer: { email: "***", self: true },
  start: { dateTime: "2020-01-04T17:00:00+09:00" },
  end: { dateTime: "2020-01-04T18:00:00+09:00" },
  iCalUID: "47vle5jario2uhsc34mk1haiep@google.com",
  sequence: 0,
  reminders: { useDefault: true },
};

export default event;
