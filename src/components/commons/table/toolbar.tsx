import { Input, Button } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import { useState, useEffect, ChangeEvent } from 'react';
import { useLocation, Link, useSearchParams } from 'react-router-dom';

export interface ToolBarProps {
  extra?: React.FC;
}

const CustomToolBar = (props: ToolBarProps) => {
  const location = useLocation();

  const [params, setParam] = useSearchParams();
  const [search, setSearch] = useState(params.get('filter') ?? undefined);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (search !== undefined)
        setParam((prev) => {
          prev.set('filter', search ?? '');
          return prev;
        });
    }, 1000);
    return () => clearTimeout(timeOut);
  }, [search]);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
    setParam((prev) => {
      prev.set('current', '1');
      return prev;
    });
  }

  return (
    <div style={{ display: 'flex', marginBottom: 16 }}>
      <Input
        defaultValue={search}
        onChange={handleChange}
        prefix={<SearchOutlined />}
        placeholder="Search"
      />
      &emsp;
      {props.extra ?
        <>
          <props.extra />
          &emsp;
        </>
        : null}
      <Link to={`${location.pathname}/create`}>
        <Button className='bg-blue-500' type="primary" icon={<PlusOutlined />}>
          Create
        </Button>
      </Link>
    </div>
  );
};

export default CustomToolBar;
