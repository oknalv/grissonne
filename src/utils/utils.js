export const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(() => {
        resolve(); 
    }, timeout));
}

export const asTemplate = (text, values) => {
    return eval(`\`${text}\``);
}