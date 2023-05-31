import { Table, TableColumnProps } from 'antd';

import defaultProps from './defaultProps';
import { useTableHooks } from './hooks';
import CustomToolBar from './toolbar';
import { CustomPagination } from './pagination';

export interface TableProps {
  extra?: React.FC;
  total: number;
  loading: boolean;
  columns: TableColumnProps<any>[];
  dataSource: any[];
  onDelete: (id: number) => Promise<any>;
}

export default function CustomTable({ extra, ...props }: TableProps) {
  const hookProps = useTableHooks(props);
  return (
    <div className='bg-white p-5 shadow'>
      <CustomToolBar extra={extra} />
      <Table {...hookProps} {...defaultProps} />
      <CustomPagination total={props.total} />
    </div>
  );
}
