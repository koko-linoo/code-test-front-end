import { Pagination } from 'antd';
import { useSearchParams } from 'react-router-dom';
import styles from './style.module.scss';

export const CustomPagination = (props: { total: number }) => {
  const [param, setParam] = useSearchParams();

  return (
    <div>
      <Pagination
        rootClassName={styles.pagination}
        current={parseInt(param.get('current') ?? '1')}
        pageSize={parseInt(param.get('pageSize') ?? '10')}
        total={props.total}
        showSizeChanger
        onChange={(page, pageSize) => {
          setParam((prev) => {
            prev.set('current', page.toString());
            prev.set('pageSize', pageSize.toString());
            return prev;
          });
        }}
      />
    </div>
  );
};
