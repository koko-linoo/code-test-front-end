import DataTable from '@components/commons/table';
import { useDeletePost, useFetchPosts } from './hooks';
import CreatePost from './create';
import PostDetail from './detail';
import UpdatePost from './update';
import { TableColumnProps } from 'antd';

export default function List() {

    const { total, isLoading, list } = useFetchPosts();

    const mutation = useDeletePost();

    const columns: TableColumnProps<any>[] = [
        {
            dataIndex: 'title',
            title: 'Title',
            sorter: true,
        },
        {
            dataIndex: 'category',
            title: 'Category',
            render: (category) => category.name,
        },
        {
            dataIndex: 'createdAt',
            title: 'Created At',
        },
    ];

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

export { CreatePost, PostDetail, UpdatePost };
