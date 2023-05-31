import { Card, Descriptions } from 'antd';
import { useParams } from 'react-router-dom';

import { useFetchPost } from './hooks';

export default function Detail() {
  const { id } = useParams();

  const { isLoading, data } = useFetchPost(id);

  if (isLoading) return <div />;

  return (
    <Card className='w-full'>
      <Descriptions title="Info" colon column={1} bordered>
        <Descriptions.Item label="Title">
          {data?.title}
        </Descriptions.Item>
        <Descriptions.Item label="Content">
          {data?.content}
        </Descriptions.Item>
        <Descriptions.Item label="Benefit">
          {data?.benefit}
        </Descriptions.Item>
        <Descriptions.Item label="User">
          {data?.user?.username}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
}
