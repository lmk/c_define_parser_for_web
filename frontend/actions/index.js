export const ALL_LIST = "ALL_LIST";

export function receiveValue(value) {
    console.log("TRACE actions/index.js");
    return {
        type: ALL_LIST,
        value: value
    };
};