export const setInStorage = (name, value) => {
    // if (localStorage) {
    //     localStorage.setItem(name, value);
    // }

    if (localStorage) {
        const previousData = localStorage.getItem('boarderApp');
        const previousParsedData = JSON.parse(previousData);
        const boarderAppData = {
            ...previousParsedData,
            [name]: value
        }
        const parsedData = JSON.stringify(boarderAppData);
        localStorage.setItem('boarderApp', parsedData);
    }
}

export const getFromStorage = (name) => {
    if (localStorage) {
        const boarderAppData = localStorage.getItem('boarderApp');
        const parsedData = JSON.parse(boarderAppData);
        return parsedData ? parsedData[name] : null;
    }
}