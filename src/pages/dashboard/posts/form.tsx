import { PostModel } from '@services/postService';
import { Button, Form, Input, Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import { fetchCategorysQuery } from '../category/hooks';

interface FormProps {
  onSubmit: (formData: Map<string, any>) => void;
  initialValue?: PostModel | null;
}

export default function FormComponent(props: FormProps) {
  const initialValue: PostModel = {
    title: '',
    categoryId: undefined,
    content: '',
    benefit: '',
    imageUrl: '',
    createdAt: ''
  };
  const categories = fetchCategorysQuery();

  const navigate = useNavigate();

  return (
    <div className='bg-white p-5 shadow'>
      <br />
      <Form
        wrapperCol={{
          span: 12,
        }}
        labelCol={{
          span: 4,
          offset: 2,
        }}
        initialValues={props.initialValue || initialValue}
        onFinish={props.onSubmit}
      >
        <Form.Item
          label="Image Url"
          name="imageUrl"
        >
          <Input type="text" />
        </Form.Item>
        <Form.Item
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: 'Title is Required.',
            },
          ]}
        >
          <Input type="text" />
        </Form.Item>
        <Form.Item
          label="Category"
          name="categoryId"
          rules={[
            {
              required: true,
              message: 'Property is Required.',
            },
          ]}
        >
          <Select
            allowClear
            loading={categories.isLoading}
            options={
              categories.data?.response.list.map((item: any) => ({
                label: item.name,
                value: item.id,
              })) ?? []
            }
          />
        </Form.Item>
        <Form.Item
          label="Content"
          name="content"
          rules={[
            {
              required: true,
              message: 'Content is Required.',
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          label="Benefit"
          name="benefit"
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ xs: { offset: 0 }, sm: { offset: 6 } }}>
          <Button className='bg-blue-500' type="primary" htmlType="submit">
            {`${props.initialValue ? 'Update' : 'Create'}`}
          </Button>
          &emsp;
          <Button
            type="ghost"
            onClick={() => navigate('/dashboard/posts')}
          >
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
