import * as React from 'react';
import { GridApi } from '../models'

export function useGridApiMethods<Api extends GridApi, Method extends Partial<Api>>(
    apiRef: React.MutableRefObject<Api>,
    apiMethods: Method
) {
    const apiMethodsRef = React.useRef<Method>(apiMethods);
    const [apiMethodsNames] = React.useState(Object.keys(apiMethods));

    const installMethods = React.useCallback(() => {
        if (!apiRef.current) {
            return;
        }
        apiMethodsNames.forEach((methodName) => {
            if (!apiRef.current.hasOwnProperty(methodName)) {
                //@ts-ignore    
                apiRef.current[methodName as keyof GridApiMethod] = (...args: any) => apiMethodsRef.current[methodName as keyof GridApiMethod](...args);
            }
        });
    }, [apiMethodsNames, apiRef]);

    React.useEffect(() => {
        apiMethodsRef.current = apiMethods;
    }, [apiMethods]);

    React.useEffect(() => {
        installMethods();
    }, [installMethods]);

    installMethods();
}