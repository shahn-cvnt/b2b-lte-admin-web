function BasicTableData({ children, data }) {
  return (
    <td
      className="w-px whitespace-nowrap px-2 py-1 first:pl-5 last:pr-5 text-xs font-medium"
      height={"auto"}
    >
      {children || <div className="flex items-center">{data}</div>}
    </td>
  );
}

export default BasicTableData;
