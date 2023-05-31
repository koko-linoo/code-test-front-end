import { useParams } from 'react-router-dom';

import FormComponent from './form';
import { useFetchTag, useUpdateTag } from './hooks';

export default function UpdateTag() {
  const { id } = useParams();

  const { isLoading, data } = useFetchTag(id);
  const mutation = useUpdateTag();

  if (isLoading) return <div />;

  return (
    <FormComponent
      initialValue={data.data}
      onSubmit={(newData) =>
        mutation.mutate({
          ...newData,
          id,
        })
      }
    />
  );
}
