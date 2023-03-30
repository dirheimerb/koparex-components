import type { Meta, StoryObj } from '@storybook/react';
import Task from '../components/Task';

const meta: Meta<typeof Task> = {
    title: 'Task',
    component: Task,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof Task>;

export const Default: Story = {
    args: {
        task: {
            id: '1Task',
            title: 'Test Task',
            state: 'TASK_INBOX',
           
        },
    },
};

export const Pinned: Story = {
    args: {
        task: {
            id: 'pinnedtask2',
            title: 'Pinned Task Test',
            state: 'TASK_PINNED',
            
        },
    },
};

export const Archived: Story = {
    args: {
        task: {
            id: 'archivedtask3',
            title: 'Archived Task Test',
            state: 'TASK_ARCHIVED',
        },
    },
};
