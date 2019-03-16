export const setInStorage = (name, value) => {
    // if (localStorage) {
    //     localStorage.setItem(name, value);
    // }

    const boarderAppData = {
        [name]: value
    }

    const parsedData = JSON.stringify(boarderAppData);
    if (localStorage) {
        localStorage.setItem('boarderApp', parsedData);
    }
}

export const getFromStorage = (name) => {
    if (localStorage) {
        const boarderAppData = localStorage.getItem('boarderApp');
        const parsedData = JSON.parse(boarderAppData);
        return parsedData[name];
    }
}