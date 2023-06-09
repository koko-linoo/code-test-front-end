import DataTable from '@components/commons/table';
import CreateTag from './create';
import TagDetail from './detail';
import UpdateTag from './update';
import { useDeleteTag, useFetchTags } from './hooks';
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

export default function Tags() {
  const mutation = useDeleteTag();

  const { total, isLoading, list } = useFetchTags();

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

export { CreateTag, TagDetail, UpdateTag };
