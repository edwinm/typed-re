import {match} from "../src/typed-re.js";

////// Date example //////

const dateRe = "(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})";

const dateMatch = match("2024-10-28", dateRe);

console.log(dateMatch?.groups.day); // OK

// console.log(dateMatch?.groups.hour); ERROR


////// Email example //////

const mailRe = "^(?<username>[a-zA-Z0-9._%+-]+)@(?<domain>[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,})$"

const mailMatch = match("mark@example.com", mailRe);

console.log(mailMatch?.groups.username); // OK

// console.log(mailMatch?.groups.host); ERROR
