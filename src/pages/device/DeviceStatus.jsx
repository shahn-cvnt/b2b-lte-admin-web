import { useEffect, useState } from "react";
import { useDeviceList } from "../../hooks/useDeviceList";
import DeviceStatusModal from "./DeviceStatusModal";
import BasicTable from "../../components/table/BasicTable";
import ModalBasic from "../../components/modal/ModalBasic";
import Pagination from "../../components/Pagination";
import { ReactComponent as SVGCall } from "../../images/ic_call_nor.svg";
import { ReactComponent as SVGCallDis } from "../../images/ic_call_dis.svg";

import moment from "moment";

const DeviceTableHeader = () => {
  return (
    <>
      <BasicTable.TableHeader name="시리얼" />
      <BasicTable.TableHeader name="모델" />
      <BasicTable.TableHeader name="MAC주소" />
      <BasicTable.TableHeader name="SW버전" />
      <BasicTable.TableHeader name="IoT계정" />
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
      <BasicTable.TableData data={device.serial} />
      <BasicTable.TableData data={device.model} />
      <BasicTable.TableData data={device.mac} />
      <BasicTable.TableData data={device.version} />
      <BasicTable.TableData data={device.iot?.iotAccount} />
      <BasicTable.TableData data="SIP">
        {device.sip?.isRegistered ? <SVGCall /> : <SVGCallDis />}
      </BasicTable.TableData>
      <BasicTable.TableData data="접속상태">
        {moment(device.updateTime, "YYYY-MM-DD HH:mm:ss Z").isAfter(
          moment().subtract(10, "minute")
        ) ? (
          <div className="inline-flex rounded-full bg-emerald-100 px-2.5 py-0.5 text-center text-xs font-medium text-emerald-600">
            온라인
          </div>
        ) : (
          <div className="inline-flex rounded-full bg-rose-100 px-2.5 py-0.5 text-center text-xs font-medium text-rose-500">
            오프라인
          </div>
        )}
      </BasicTable.TableData>
      <BasicTable.TableData
        data={moment(device.updateTime, "YYYY-MM-DD HH:mm:ss Z").format(
          "YY/MM/DD HH:mm:ss"
        )}
      />
      <BasicTable.TableData data="상세보기">
        <button
          className="btn-xs relative border-slate-200 bg-white px-2 text-slate-600 shadow-sm hover:border-slate-300"
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
        >
          <span className="text-xs text-blue-500">상세보기</span>
          {device.enabledLogList.length > 0 && (
            <div className="absolute top-[-3px] right-[-4px] h-2.5 w-2.5 rounded-full border-2 border-white bg-rose-500" />
          )}
        </button>
      </BasicTable.TableData>
    </tr>
  );
};

function DeviceStatus() {
  const { deviceList, totalCount, totalPage, update } = useDeviceList();
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleIsModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    update(currentPage);

    if (!isModalOpen) {
      setSelectedDevice(null);
    }
  }, [isModalOpen]);

  return (
    <>
      <main className="h-full overflow-hidden bg-slate-100 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex h-full flex-col max-w-9xl mx-auto">
          <div className="overflow-x-auto overflow-y-hidden rounded-sm border border-slate-300 bg-white shadow-lg">
            <header className="items-center justify-between px-5 py-2">
              <h2 className="font-semibold text-slate-800">
                기기 목록
                <span className="ml-2 font-medium text-slate-400">
                  {totalCount}
                </span>
              </h2>
            </header>
            <BasicTable
              theader={<DeviceTableHeader />}
              trow={deviceList.map((e) => {
                return (
                  <DeviceTableRow device={e} handleClick={() => {
                    setSelectedDevice(e);
                    handleIsModalOpen();
                  }} />
                );
              })}
            />
          </div>
          {/* Pagination */}
          <div className="mt-4">
            <Pagination
              totalPage={totalPage}
              initCurrentPage={currentPage}
              handleClickPage={(page) => {
                setCurrentPage(page);
                update(page);
              }}
            />
          </div>
        </div>
        <ModalBasic
          modalOpen={isModalOpen}
          setModalOpen={handleIsModalOpen}
          title=""
        >
          {selectedDevice && (
            <DeviceStatusModal initDevice={selectedDevice} />
          )}
        </ModalBasic>
      </main>
    </>
  );
}

export default DeviceStatus;
