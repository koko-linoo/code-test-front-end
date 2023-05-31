import FormComponent from './form';
import { useAddCategory } from './hooks';

export default function CreateCategory() {
  const mutation = useAddCategory();
  return <FormComponent onSubmit={mutation.mutate} />;
}
