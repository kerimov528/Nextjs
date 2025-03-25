import { Space } from "antd";
import Button from "./shared/Button/Button";

export default function Home() {
  return (
    <>
      <h1>Buttons</h1>
      <Space>
        <Button label='Label' size='normal' variant='primary' />
        <Button label='Label' size='medium' variant='secondary' />
        <Button
          label='Label'
          size='small'
          variant='tertiary'
          iconPosition='left'
        />
      </Space>
    </>
  );
}
