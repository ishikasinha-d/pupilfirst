type t;

let decode: Js.Json.t => t;

let id: t => int;

let value: t => string;

let hint: t => string;

let correctAnswer: t => bool;