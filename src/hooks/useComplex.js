import { useEffect, useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";

function useComplex() {
    const { user }= useAuthContext();
    const [complex, setComplex] = useState();

    const update = async () => {
        // TODO: refactoring (단지 정보)
        const response = await axios(`/api/v2/nms/complex/info`, {
            method: 'get',
            headers: {
                'Authorization': `Bearer ${user.token}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.errorCode) {
            setComplex(response.data);
        }
    }

    useEffect(() => {
        update();
    }, []);

    return { complex }

}

export { useComplex }