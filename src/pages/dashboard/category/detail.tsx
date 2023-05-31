import { Card, Descriptions } from 'antd';
import { useParams } from 'react-router-dom';

import { useFetchCategory } from './hooks';

export default function CategoryDetail() {
  const { id } = useParams();

  const { isLoading, data } = useFetchCategory(id);

  if (isLoading) return <div />;

  console.log(data)

  return (
    <Card className='w-full'>
      <Descriptions title="Info" colon column={1} bordered>
        <Descriptions.Item label="Name">
          {data?.data?.name}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
}
