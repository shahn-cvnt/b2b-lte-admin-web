function DataTableHeader({ name }) {
  return (
    <th className="px-2 first:pl-5 last:pr-5 py-2 whitespace-nowrap w-px">
      <div className="text-left font-semibold">{name}</div>
    </th>
  );
}

export default DataTableHeader;
