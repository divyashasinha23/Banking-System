export const getUser = () => {
    const userStr = sessionStorage.getItem("customer");
    if(userStr) return JSON.parse(userStr);
    else return null;
}

export const getToken = () => {
    return sessionStorage.getItem("token") || null;
}

export const setUserSession = (token,customer) => {
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("customer", JSON.stringify(customer));
}

export const removeUserSession = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("customer");
}


