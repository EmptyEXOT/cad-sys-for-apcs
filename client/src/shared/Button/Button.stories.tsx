import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';
import '@/app/[locale]/globals.scss'
import {inter} from "@/shared/fonts/fonts";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Shared/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
    decorators: [
        (Story) => <div className={inter.className}><Story/></div>,
    ]
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Button',
    },
};