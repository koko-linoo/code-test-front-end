import { Card, Descriptions } from 'antd';
import { useParams } from 'react-router-dom';

import { useFetchTag } from './hooks';

export default function TagDetail() {
  const { id } = useParams();

  const { isLoading, data } = useFetchTag(id);

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
