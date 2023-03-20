import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";

function useDeviceList() {
    const { user }= useAuthContext();
    const [deviceList, setDeviceList] = useState([]);
    const [totalCount, setTotalCount] = useState();
    const [totalPage, setTotalPage] = useState();

    const update = async (page = 0) => {
        const response = await axios(`/api/v2/nms/monitor/device_search`, {
            method: 'post',
            headers: {
                'Authorization': `Bearer ${user.token}`,
                'Content-Type': 'application/json'
            },
            data: {
                page: page
            }
        });
        // const response = await axios(`/api/v1/device/status?page=${page}`, {
        //     headers: {
        //         Authorization: `Bearer ${user.token}`
        //     }
        // });

        const result = response.data;
        if (result.data) {
            setDeviceList(result.data.devices);
            setTotalCount(result.data.totalCount);
            setTotalPage(result.data.totalPage);
        }
        
    }

    return { deviceList, totalCount, totalPage, update }
}

export { useDeviceList }