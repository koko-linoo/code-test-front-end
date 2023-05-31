import { CategoryModel } from '@services/categoryService';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

interface FormProps {
  onSubmit: (formData: Map<string, any>) => void;
  initialValue?: CategoryModel | null;
}

export default function FormComponent(props: FormProps) {
  const initialValue: CategoryModel = {
    name: '',
  };

  const navigate = useNavigate();

  return (
    <div className='bg-white p-5 shadow'>
      <br />
      <Form
        wrapperCol={{
          span: 12,
        }}
        labelCol={{
          span: 2,
          offset: 4,
        }}
        initialValues={props.initialValue || initialValue}
        onFinish={props.onSubmit}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Name is Required.',
            },
          ]}
        >
          <Input type="text" />
        </Form.Item>
        <Form.Item wrapperCol={{ xs: { offset: 0 }, sm: { offset: 6 } }}>
          <Button className='bg-blue-500' type="primary" htmlType="submit">
            {`${props.initialValue ? 'Update' : 'Create'}`}
          </Button>
          &emsp;
          <Button
            type="ghost"
            onClick={() => navigate('/dashboard/category')}
          >
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
