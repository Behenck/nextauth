import { useContext } from 'react';
import { AuthContext } from "../contexts/AuthContext";
import { valideUserPermissions } from '../utils/validateUserPermissions';

type UseCanParms = {
    permissions?: string[];
    roles?: string[];
}

export function useCan({ permissions, roles }: UseCanParms) {
    const { user, isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        return false;
    }

    const userhasValidPermissions = valideUserPermissions({
        user,
        permissions, 
        roles
    });

    return userhasValidPermissions;
}