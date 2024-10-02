import React from 'react';
import { Block as UIBlock } from '@atto_ui/layout';

export default {
  title: 'React Components/Layout/Block',
  component: UIBlock,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const Template = args => <UIBlock {...args} />;

// 스토리 정의
export const BlockStory = Template.bind({});
BlockStory.args = {
  // _Block 컴포넌트가 필요로 하는 props를 여기에 추가하세요
  // 예시:
  // children: 'Hello, Block!',
};
