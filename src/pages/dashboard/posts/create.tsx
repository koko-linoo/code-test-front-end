import FormComponent from './form';
import { useAddPost } from './hooks';

export default function CreatePost() {
  const mutation = useAddPost();
  return <FormComponent onSubmit={mutation.mutate} />;
}
