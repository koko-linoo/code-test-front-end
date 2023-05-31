import FormComponent from './form';
import { useAddTag } from './hooks';

export default function CreateTag() {
  const mutation = useAddTag();
  return <FormComponent onSubmit={mutation.mutate} />;
}
