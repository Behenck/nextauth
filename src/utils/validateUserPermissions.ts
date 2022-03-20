type User = {
    permissions: string[],
    roles: string[],
}

type ValideUserPermissionsParams = {
    user: User;
    permissions?: string[];
    roles?: string[];
}

export function valideUserPermissions({
    user,
    permissions, 
    roles
}: ValideUserPermissionsParams) {
    if (permissions?.length > 0) {
        const hasAllPermissions = permissions.every(permission => { //every so retorna true se todas as funcoes estiverem satisfeitas
            return user.permissions.includes(permission);
        });

        if (!hasAllPermissions) {
            return false;
        }
    }

    if (roles?.length > 0) {
        const hasAllRoles = roles.some(role => { //some retorna caso uma delas estiverem satisfeitas
            return user.roles.includes(role);
        });

        if (!hasAllRoles) {
            return false;
        }
    }

    return true;
}