let userData: any = {};
let dirty = false;

export interface UserData {
    volume: number
}

export const getUserData = (username: string): UserData => {
    if (userData[username]) return userData[username];

    const data: UserData = {
        volume: 50
    };

    userData[username] = data;
    dirty = true;
    return data;
};

export const markDirty = () => {
    dirty = true;
};

export const saveUserdata = () => {
    if (!dirty) return;

    localStorage["userdata"] = JSON.stringify(userData);

    dirty = false;
};

export const loadUserdata = () => {
    userData = JSON.parse(localStorage["userdata"] || "{}");
};