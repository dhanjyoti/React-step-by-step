// import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';
// import { Button } from './Button';

// // More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
// const meta = {
//   title: 'Atom/Button',
//   component: Button,
//   parameters: {
//     // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
//     layout: 'centered',
//   },
//   // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
//   tags: ['autodocs'],
//   // More on argTypes: https://storybook.js.org/docs/api/argtypes
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
//   // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
//   args: { onClick: fn() },
// } satisfies Meta<typeof Button>;

// export default meta;
// type Story = StoryObj<typeof meta>;

// // More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
// export const PrimaryButton: Story = {
//   args: {
//     primary: true,
//     label: 'Button',
//   },
// };

// export const Secondary: Story = {
//   args: {
//     label: 'Button',
//   },
// };

// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };


import {ComponentStory, CompoonentMeta} from '@storybook/react';
import { Button } from './Button';

export default {
    title: 'Component/Button',
    component: Button,
    argTypes: {}

} as CompoonentMeta<typeof Button>;

const Template : ComponentStory<typeof Button> = (args)=> <Button {...args}/>;

export const Primary = Template.bind({})

Primary.storyName = 'Primary Button';

Primary.args = {
    primary: true,
    size: 'medium',
    label: 'Primary Button'
};

export const Secondary = Template.bind({})

Secondary.storyName = 'Secondary Button';

Secondary.args = {
    secondary: false,
    size: 'medium',
    label: 'Secondary Button'
};