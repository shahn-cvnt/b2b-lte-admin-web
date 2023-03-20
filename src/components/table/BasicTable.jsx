import TableHeader from "./BasicTableHeader";
import TableData from "./BasicTableData";
import { Component } from "react";

function BasicTable({ theader, trow }) {
  return (
    <>
      <table className="w-full table-auto">
        <thead className="border-t border-b border-slate-200 bg-slate-50 text-sm font-semibold text-slate-500">
          <tr>{theader}</tr>
        </thead>
        <tbody className="divide-y divide-slate-200 text-sm">
          {trow}
        </tbody>
      </table>
    </>
  );
}

BasicTable.TableHeader = TableHeader;
BasicTable.TableData = TableData;

export default BasicTable;
