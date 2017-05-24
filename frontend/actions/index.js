export const ALL_LIST = "ALL_LIST";

export function receiveValue(value) {
    return {
        type: ALL_LIST,
        value: value
    };
};