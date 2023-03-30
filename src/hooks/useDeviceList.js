import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";

function useDeviceList() {
    const { user }= useAuthContext();
    const [deviceList, setDeviceList] = useState([]);
    const [totalCount, setTotalCount] = useState();
    const [totalPage, setTotalPage] = useState();

    const update = async (page = 0, data) => {
        const response = await axios(`/api/v2/nms/monitor/device_search`, {
            method: 'post',
            headers: {
                'Authorization': `Bearer ${user.token}`,
                'Content-Type': 'application/json'
            },
            data: {
                page, ...data
            }
        });

        if (!response.errorCode) {
            setDeviceList(response.data.devices);
            setTotalCount(response.data.totalCount);
            setTotalPage(response.data.totalPage);
        }
        
    }

    return { deviceList, totalCount, totalPage, update }
}

export { useDeviceList }