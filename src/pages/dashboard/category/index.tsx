import DataTable from '@components/commons/table';
import CreateCategory from './create';
import CategoryDetail from './detail';
import UpdateCategory from './update';
import { useDeleteCategory, useFetchCategorys } from './hooks';
import { TableColumnProps } from 'antd';

const columns: TableColumnProps<any>[] = [
  {
    dataIndex: 'name',
    title: 'Name',
    sorter: true,
  },
  {
    dataIndex: 'createdAt',
    title: 'Created At',
  },
  {
    dataIndex: 'updatedAt',
    title: 'Updated At',
  },
];

export default function Categorys() {
  const mutation = useDeleteCategory();

  const { total, isLoading, list } = useFetchCategorys();

  return (
    <DataTable
      total={total}
      loading={isLoading}
      dataSource={list}
      columns={columns}
      onDelete={mutation.mutate}
    />
  );
}

export { CreateCategory, CategoryDetail, UpdateCategory };
