import { useEffect, useState } from "react";
import { useDeviceList } from "../../hooks/useDeviceList";
import DeviceStatusModal from "./DeviceStatusModal";
import BasicTable from "../../components/table/BasicTable";
import ModalBasic from "../../components/modal/ModalBasic";
import Pagination from "../../components/Pagination";
import Search from "../../components/search/Search";
import DropdownBasic from "../../components/DropdownBasic";
import { ReactComponent as SVGCall } from "../../images/ic_call_nor.svg";
import { ReactComponent as SVGCallDis } from "../../images/ic_call_dis.svg";

import moment from "moment";

function DeviceStatus() {
  const { deviceList, totalCount, totalPage, update } = useDeviceList();
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchOption, setSearchOption] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const category = [
    {
      id: 0,
      name: "mac",
      period: "MAC주소",
    },
    {
      id: 1,
      name: "model",
      period: "모델",
    },
    {
      id: 2,
      name: "sn",
      period: "시리얼",
    },
  ];

  const DeviceTableHeader = () => {
    return (
      <>
        <BasicTable.TableHeader name="시리얼" />
        <BasicTable.TableHeader name="모델" />
        <BasicTable.TableHeader name="MAC 주소" />
        <BasicTable.TableHeader name="SW 버전" />
        <BasicTable.TableHeader name="IoT 계정" />
        <BasicTable.TableHeader name="SIP" />
        <BasicTable.TableHeader name="접속상태" />
        <BasicTable.TableHeader name="갱신시간" />
        <BasicTable.TableHeader name="" />
      </>
    );
  };

  const DeviceTableRow = ({ device, handleClick }) => {
    return (
      <tr className="hover:bg-indigo-50">
        <BasicTable.TableData data={device.serial}>
          <div className="w-28">{device.serial}</div>
        </BasicTable.TableData>
        <BasicTable.TableData data={device.model}>
          <div className="w-16">{device.model}</div>
        </BasicTable.TableData>
        <BasicTable.TableData data={device.mac} />
        <BasicTable.TableData data={device.version} />
        {/* <BasicTable.TableData data={device.iot?.iotAccount} /> */}
        <BasicTable.TableData data={"iot"}>
          <div className="w-28">{device.iot?.iotAccount}</div>
        </BasicTable.TableData>
        <BasicTable.TableData data="SIP">
          {device.sip?.isRegistered ? <SVGCall /> : <SVGCallDis />}
        </BasicTable.TableData>
        <BasicTable.TableData data="접속상태">
          {moment(device.updateTime, "YYYY-MM-DD HH:mm:ss Z").isAfter(
            moment().subtract(10, "minute")
          ) ? (
            <div className="w-18">
              <div className="inline-flex rounded-full bg-emerald-100 px-2.5 py-0.5 text-center text-xs font-medium text-emerald-600">
                온라인
              </div>
            </div>
          ) : (
            <div className="w-18">
              <div className="inline-flex rounded-full bg-rose-100 px-2.5 py-0.5 text-center text-xs font-medium text-rose-500">
                오프라인
              </div>
            </div>
          )}
        </BasicTable.TableData>
        <BasicTable.TableData
          data={moment(device.updateTime, "YYYY-MM-DD HH:mm:ss Z").format(
            "YY/MM/DD HH:mm:ss"
          )}
        >
          <div className="w-20">
            {moment(device.updateTime, "YYYY-MM-DD HH:mm:ss Z").format(
              "YY/MM/DD HH:mm:ss"
            )}
          </div>
        </BasicTable.TableData>
        <BasicTable.TableData data="상태보기">
          <button
            className="btn-xs relative border-slate-200 bg-white px-2 text-slate-600 shadow-sm hover:border-slate-300"
            onClick={(e) => {
              e.stopPropagation();
              handleClick();
            }}
          >
            <span className="text-xs text-blue-500">상태보기</span>
            {device.enabledLogList.length > 0 && (
              <div className="absolute right-[-4px] top-[-3px] h-2.5 w-2.5 rounded-full border-2 border-white bg-rose-500" />
            )}
          </button>
        </BasicTable.TableData>
      </tr>
    );
  };

  useEffect(() => {
    update(currentPage, searchOption);

    if (!isModalOpen) {
      setSelectedDevice(null);
    }
  }, [isModalOpen]);

  const handleIsModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  const refresh = () => {
    if (Object.keys(searchOption)) {
      setCurrentPage(0);
      setSearchOption({});
      update();
    }
  };

  return (
    <main className="sidebar-expanded bg-slate-100 font-inter text-slate-900 antialiased">
      <div className="mx-auto w-full max-w-9xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="min-h-40 overflow-auto rounded-sm border border-slate-300 bg-white shadow-lg">
          <header className="items-center justify-between px-5 py-2 sm:flex lg:flex ">
            <div className="flex">
              <h2 className="py-1 font-semibold text-slate-800">
                기기 목록
                <span className="ml-2 mr-2 font-medium text-slate-400">
                  {totalCount}
                </span>
              </h2>
              {/* 새로고침 */}
              <button
                onClick={() => {
                  update(currentPage, searchOption);
                  // 디바이스 상태 조회 갱신
                  // updateDeviceStatus(item.serial);
                }}
              >
                <svg className="icon icon-tabler icon-tabler-settings h-4 w-4 shrink-0 fill-current text-slate-400 hover:text-slate-600">
                  <path d="M4.3 4.5c1.9-1.9 5.1-1.9 7 0 .7.7 1.2 1.7 1.4 2.7l2-.3c-.2-1.5-.9-2.8-1.9-3.8C10.1.4 5.7.4 2.9 3.1L.7.9 0 7.3l6.4-.7-2.1-2.1zM15.6 8.7l-6.4.7 2.1 2.1c-1.9 1.9-5.1 1.9-7 0-.7-.7-1.2-1.7-1.4-2.7l-2 .3c.2 1.5.9 2.8 1.9 3.8 1.4 1.4 3.1 2 4.9 2 1.8 0 3.6-.7 4.9-2l2.2 2.2.8-6.4z" />
                </svg>
              </button>
            </div>
            <div className="flex items-center self-end">
              {/* <DropdownBasic
                  options={[
                    {
                      id: 0,
                      period: "20 개씩 보기",
                    },
                    {
                      id: 1,
                      period: "50 개씩 보기",
                    },
                    {
                      id: 2,
                      period: "100 개씩 보기",
                    },
                  ]}
                /> */}
              {/* Clear */}
              {/* <button
                  className="flex self-end py-2 px-3 text-sm text-slate-500 hover:text-slate-600"
                  onClick={() => {
                    setCurrentPage(0);
                    setSearchOption({});
                    update();
                  }}
                >
                  <svg
                    className="icon icon-tabler icon-tabler-settings h-4 w-4 shrink-0 fill-current"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.3 4.5c1.9-1.9 5.1-1.9 7 0 .7.7 1.2 1.7 1.4 2.7l2-.3c-.2-1.5-.9-2.8-1.9-3.8C10.1.4 5.7.4 2.9 3.1L.7.9 0 7.3l6.4-.7-2.1-2.1zM15.6 8.7l-6.4.7 2.1 2.1c-1.9 1.9-5.1 1.9-7 0-.7-.7-1.2-1.7-1.4-2.7l-2 .3c.2 1.5.9 2.8 1.9 3.8 1.4 1.4 3.1 2 4.9 2 1.8 0 3.6-.7 4.9-2l2.2 2.2.8-6.4z" />
                  </svg>
                </button> */}
              <Search
                options={category}
                refresh={refresh}
                handleClickSearch={(e, option) => {
                  const form = e.target;
                  const value = form.search.value;
                  const name = option.name;
                  const data = {};

                  if (name === "online") {
                    data[name] = true;
                  } else {
                    data[name] = value;
                  }

                  console.log("currentPage");
                  console.log("data : ", data);

                  setCurrentPage(0);
                  setSearchOption(data);
                  update(0, data);
                }}
              />
            </div>
          </header>
          <BasicTable
            theader={<DeviceTableHeader />}
            trow={
              deviceList.length
                ? deviceList.map((e, index) => {
                    return (
                      <DeviceTableRow
                        key={index}
                        device={e}
                        handleClick={() => {
                          setSelectedDevice(e);
                          handleIsModalOpen();
                        }}
                      />
                    );
                  })
                : null
            }
          />
          {deviceList.length === 0 && (
            <div className="py-2.5 text-center text-sm text-slate-500">
              결과 없음
            </div>
          )}
        </div>
        {/* Pagination */}
        <div className="relative mt-4">
          <Pagination
            totalPage={totalPage}
            currentPage={currentPage}
            handleClickPage={(page) => {
              setCurrentPage(page);
              update(page, searchOption);
            }}
          />
          {/* <div className="absolute right-0 top-0 my-1">
              <DropdownBasic
                options={[
                  {
                    id: 0,
                    period: "20 개씩 보기",
                  },
                  {
                    id: 1,
                    period: "50 개씩 보기",
                  },
                  {
                    id: 2,
                    period: "100 개씩 보기",
                  },
                ]}
              />
            </div> */}
        </div>
      </div>
      <ModalBasic
        modalOpen={isModalOpen}
        setModalOpen={handleIsModalOpen}
        title=""
      >
        {selectedDevice && <DeviceStatusModal initDevice={selectedDevice} />}
      </ModalBasic>
    </main>
  );
}

export default DeviceStatus;
