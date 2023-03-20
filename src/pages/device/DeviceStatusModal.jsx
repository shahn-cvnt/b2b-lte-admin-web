import { useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import DropdownFull from "../../components/DropdownFull";
import { ReactComponent as SVGShieldLock } from "../../images/ic_shield_lock.svg";
import axios from "axios";
import moment from "moment";

function DeviceStatusModal({ initDevice }) {
  const { user } = useAuthContext();
  const [device, setDevice] = useState(initDevice);
  const [enabledLogList, setEnabledLogList] = useState(initDevice.enabledLogList);
  const [firmwareList, setFirmwareList] = useState([]);

  const isEnabledLog = (log, enabledLogList) => {
    return enabledLogList.find((e) => {
      return e === log;
    });
  };

  // 새로 고침
  const requestDeviceStatus = async (serialNumber) => {
    const response = await axios(`/api/v2/nms/monitor/device_status`, {
      method: "post",
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-Type": "application/json",
      },
      data: {
        sn: serialNumber,
      },
    });

    const result = response.data;
    
    if (!result.error) {
      setDevice(result.data);
    }
  };

  // 로그 활성화
  const requestDeviceLog = async (serialNumber, listLog) => {
    const response = await axios(`/api/v2/nms/monitor/device_log`, {
      method: "post",
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-Type": "application/json",
      },
      data: {
        sn: serialNumber,
        listLog: listLog,
      },
    });

    const result = response.data;

    if (!result.error) {
      // 성공
      // requestDeviceStatus(serialNumber)
      setEnabledLogList(listLog);
    }
  };

  // 기기 제어 (ftp, fstp 업데이트 /기기 상태 업데이트/ 기기 재부팅)
  const requestDeviceControl = async (serialNumber, command) => {
    const response = await axios(`/api/v2/nms/monitor/device_control`, {
      method: "post",
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-Type": "application/json",
      },
      data: {
        sn: serialNumber,
        cmd: command,
      },
    });

    const result = response.data;

    if (!result.error) {
      // 성공
    }
  };

  useEffect(() => {
    setEnabledLogList(device.enabledLogList)
  }, [device]);

  return (
    <div className="relative flex flex-1 flex-col overflow-hidden overflow-y-auto">
      <main>
        <div className="mx-auto max-w-7xl bg-white">
          <div className="space-y-6 px-6 pt-1 pb-8">
            <section>
              <div className="align-center my-1 flex">
                <h3 className="flex-1 text-lg font-bold leading-snug text-slate-800 ">
                  디바이스 정보
                </h3>
                <div>
                  <span className="mr-2 text-sm text-slate-500">
                    {"마지막 업데이트 : " +
                      moment(device.updateTime, "YYYY-MM-DD HH:mm:ss Z").format(
                        "YY/MM/DD HH:mm:ss"
                      )}
                  </span>
                </div>
                <button
                  type="submit"
                  className="btn-sm self-end border-slate-200 bg-white text-sm text-indigo-500 hover:border-slate-300"
                  onClick={() => {
                    requestDeviceStatus(device.serial);
                  }}
                >
                  새로고침
                </button>
              </div>

              <div>
                <div className="space-y-4 md:flex md:space-y-0 md:space-x-4">
                  <div className="flex-1">
                    <ul>
                      <li className="flex border-b border-slate-200 md:flex">
                        <div className="w-4/12 flex-initial rounded-tl-sm bg-slate-100 py-2 pl-4 text-sm font-medium text-slate-800">
                          시리얼
                        </div>
                        <div className="text-slate-800ml-4 flex-1 py-2 text-right text-sm">
                          {device.serial}
                        </div>
                      </li>
                      <li className="flex border-b border-slate-200 md:flex">
                        <div className="w-4/12 flex-initial rounded-tl-sm bg-slate-100 py-2 pl-4 text-sm font-medium text-slate-800">
                          MAC
                        </div>
                        <div className="text-slate-800ml-4 flex-1 py-2 text-right text-sm">
                          {device.mac}
                        </div>
                      </li>
                      <li className="flex border-b border-slate-200 md:flex">
                        <div className="w-4/12 flex-initial rounded-tl-sm bg-slate-100 py-2 pl-4 text-sm font-medium text-slate-800">
                          Model
                        </div>
                        <div className="text-slate-800ml-4 flex-1 py-2 text-right text-sm">
                          {device.model}
                        </div>
                      </li>
                      <li className="flex border-b border-slate-200 md:flex">
                        <div className="w-4/12 flex-initial rounded-tl-sm bg-slate-100 py-2 pl-4 text-sm font-medium text-slate-800">
                          버전
                        </div>
                        <div className="text-slate-800ml-4 flex-1 py-2 text-right text-sm">
                          {device.version}
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="flex-1">
                    <ul>
                      <li className="flex border-b border-slate-200 md:flex">
                        <div className="w-4/12 flex-initial rounded-tl-sm bg-slate-100 py-2 pl-4 text-sm font-medium text-slate-800">
                          SIP 등록 여부
                        </div>
                        <div className="text-slate-800ml-4 flex-1 py-2 text-right text-sm">
                          {device.sip.isRegistered ? "등록됨" : "등록안됨"}
                        </div>
                      </li>
                      <li className="flex border-b border-slate-200 md:flex">
                        <div className="w-4/12 flex-initial rounded-tl-sm bg-slate-100 py-2 pl-4 text-sm font-medium text-slate-800">
                          SIP URL
                        </div>

                        <div className="text-slate-800ml-4 flex-1 py-2 text-right text-sm">
                          {device.sip.url}
                        </div>
                      </li>
                      <li className="flex border-b border-slate-200 md:flex">
                        <div className="w-4/12 flex-initial rounded-tl-sm bg-slate-100 py-2 pl-4 text-sm font-medium text-slate-800">
                          SIP 등록 시간
                        </div>
                        <div className="text-slate-800ml-4 flex-1 py-2 text-right text-sm">
                          {device.sip.lastRegisteredTime}
                        </div>
                      </li>
                      <li className="flex border-b border-slate-200 md:flex">
                        <div className="w-4/12 flex-initial rounded-tl-sm bg-slate-100 py-2 pl-4 text-sm font-medium text-slate-800">
                          IoT
                        </div>
                        <div className="text-slate-800ml-4 flex-1 py-2 text-right text-sm">
                          {device.iot.iotAccount}
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h3 className="mb-3 text-lg font-bold leading-snug text-slate-800">
                펌웨어 업데이트
              </h3>
              <div>
                <div className="flex items-center justify-between rounded-sm border border-b border-slate-200 border-slate-200 bg-slate-50 px-4 py-2 py-3">
                  <div className="w-80">
                    {firmwareList.length > 0 ? (
                      <DropdownFull
                        options={firmwareList.map((e, index) => {
                          return {
                            id: index,
                            period: e,
                          };
                        })}
                      />
                    ) : (
                      <div className="relative inline-flex w-full">
                        <button
                          id="disabled"
                          className="btn w-full min-w-44 justify-between bg-white disabled:cursor-not-allowed disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400"
                          disabled
                        >
                          <span className="flex items-center">
                            <span>{"버전 없음"}</span>
                          </span>
                          <svg
                            className="ml-1 shrink-0 fill-current text-slate-400"
                            width="11"
                            height="7"
                            viewBox="0 0 11 7"
                          >
                            <path d="M5.4 6.8L0 1.4 1.4 0l4 4 4-4 1.4 1.4z" />
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center">
                    {firmwareList.length &&
                    device.supportedCmdList.includes("updateFtp") ? (
                      <>
                        <button className="btn-sm border-slate-200 bg-white shadow-sm enabled:hover:border-slate-300">
                          FTP 업데이트
                        </button>
                        <button className="btn-sm ml-2 border-slate-200 bg-white shadow-sm enabled:hover:border-slate-300">
                          <SVGShieldLock />
                          SFTP 업데이트
                        </button>
                      </>
                    ) : (
                      <>
                        <button className="btn-sm border-slate-200 bg-white bg-slate-100 text-slate-400 shadow-sm ">
                          FTP 업데이트
                        </button>
                        <button className="btn-sm ml-2 border-slate-200 bg-white bg-slate-100 text-slate-400 shadow-sm">
                          SFTP 업데이트
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h3 className="mb-3 text-lg font-bold leading-snug text-slate-800">
                로그
              </h3>
              <div>
                <div className="flex items-center justify-between rounded-sm border border-b border-slate-200 border-slate-200 bg-slate-50 px-4 py-2 py-3">
                  <div className="w-80">
                    <div className="flex items-center">
                      <div className="-m-1.5 flex flex-col flex-wrap items-center">
                        <div className="m-1.5">
                          <div className="flex flex-wrap -space-x-px">
                            {device.supportedLogList.map((log, index) => {
                              return (
                                <button
                                  key={index}
                                  className={`btn rounded-none border-slate-200 ${
                                    isEnabledLog(log, enabledLogList)
                                      ? "bg-indigo-500 text-white hover:bg-indigo-400"
                                      : "bg-white text-slate-800  hover:bg-indigo-500 hover:text-white"
                                  } first:rounded-l last:rounded-r`}
                                  onClick={() => {
                                    let logList =  [...enabledLogList]
                                    if (isEnabledLog(log, logList)) {
                                      logList = logList.filter((e) => {
                                        return e !== log
                                      })
                                    } else {
                                      logList.push(log)
                                    }
                                    requestDeviceLog(device.serial, logList);
                                  }}
                                >
                                  {log}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button
                      className="self-end pr-2 text-sm text-slate-500 hover:text-slate-600"
                      onClick={() => {
                        requestDeviceLog(device.serial, []);
                      }}
                    >
                      모두 끄기
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center justify-between py-3">
                <div className="font-bold text-slate-800">기기 제어</div>
                <div className="ml-4 flex items-center">
                  <button
                    className="btn-sm border-slate-200 px-4 shadow-sm hover:border-slate-300"
                    onClick={() => {
                      requestDeviceControl(device.serial, "refreshStatus");
                    }}
                  >
                    기기 상태 업데이트
                  </button>
                  <hr className="mx-3 h-6 w-px bg-slate-200" />
                  <button
                    className="btn-sm border-slate-200 border-rose-400 px-4 text-rose-600 shadow-sm hover:border-rose-800 hover:text-rose-800"
                    onClick={() => {
                      requestDeviceControl(device.serial, "reboot");
                    }}
                  >
                    재부팅
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DeviceStatusModal;
