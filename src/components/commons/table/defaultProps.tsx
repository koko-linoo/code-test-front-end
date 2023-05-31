import { TableProps } from 'antd';

const defaultProps: TableProps<any> = {
  scroll: { y: '55vh' },
  size: 'small',
  rowKey: (row: any) => row.id,
  pagination: false,
};

export default defaultProps;
