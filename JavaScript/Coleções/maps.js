function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (userRoles.get(key) === "ADMIN") {
            admins.push(key);
        }
    }
    return admins;
        
}


const userRoles = new Map();

userRoles.set('Antonio', 'SUDO');
userRoles.set('Luiz', 'ADMIN');
userRoles.set('Elvira', 'ADMIN');
userRoles.set('Carolina', 'USER');
userRoles.set('Guilherme', 'USER');
userRoles.set('Priscilla', 'ADMIN');
userRoles.set('João', 'USER');
userRoles.set('Maria', 'SUDO');

console.log(getAdmins(userRoles));


