import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import { Button, Popconfirm, TableColumnProps } from 'antd';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { TableProps } from './index';

const initialColumns: TableColumnProps<any>[] = [];

export const useTableHooks = ({
  loading,
  columns,
  dataSource,
  onDelete,
}: TableProps) => {
  const location = useLocation();
  const [tempColumns, setTempColumns] = useState(initialColumns);

  useEffect(() => {
    const temp: TableColumnProps<any>[] = [
      ...columns,
      {
        dataIndex: 'operation',
        title: 'Operation',
        fixed: 'right',
        width: 150,
        render(_, entity) {
          return [
            <Link key="operation1" to={`${location.pathname}/${entity.id}`}>
              <EyeOutlined />
              &emsp;
            </Link>,
            <Link
              key="operation2"
              to={`${location.pathname}/${entity.id}/update`}
            >
              <EditOutlined />
              &emsp;
            </Link>,
            <Popconfirm
              key="operation3"
              onConfirm={() => onDelete(entity.id)}
              title="Are you sure want to DELETE?"
              okButtonProps={{
                className: "bg-blue-500"
              }}
            >
              <Button type="link" danger icon={<DeleteOutlined />} />
            </Popconfirm>,
          ];
        },
      },
    ];

    setTempColumns(temp);
  }, [columns]);

  return {
    loading,
    columns: tempColumns,
    dataSource
  };
};
