import { useParams } from 'react-router-dom';

import FormComponent from './form';
import { useFetchCategory, useUpdateCategory } from './hooks';

export default function UpdateCategory() {
  const { id } = useParams();

  const { isLoading, data } = useFetchCategory(id);
  const mutation = useUpdateCategory();

  if (isLoading) return <div />;

  console.log(data)

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
