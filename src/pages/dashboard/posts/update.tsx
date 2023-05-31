import { useParams } from 'react-router-dom';

import FormComponent from './form';
import { useFetchPost, useUpdatePost } from './hooks';

export default function Update() {
  const { id } = useParams();

  const { isLoading, data } = useFetchPost(id);
  const mutation = useUpdatePost();

  if (isLoading) return <div />;

  return (
    <FormComponent
      initialValue={data}
      onSubmit={(newData) =>
        mutation.mutate({
          ...newData,
          id,
        })
      }
    />
  );
}
