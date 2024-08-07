import { isChromatic } from '@sb/utils';
import type { Meta, StoryObj } from '@storybook/react';
import PopoverHorizontalAlign from '@ui5/webcomponents/dist/types/PopoverHorizontalAlign.js';
import PopoverPlacement from '@ui5/webcomponents/dist/types/PopoverPlacement.js';
import PopoverVerticalAlign from '@ui5/webcomponents/dist/types/PopoverVerticalAlign.js';
import { clsx } from 'clsx';
import { useState } from 'react';
import { Bar } from '../Bar';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Label } from '../Label';
import { List } from '../List';
import { ListItemStandard } from '../ListItemStandard';
import { Title } from '../Title';
import { ResponsivePopover } from './index';
import '@ui5/webcomponents-icons/dist/settings.js';

const meta = {
  title: 'Modals & Popovers / ResponsivePopover',
  component: ResponsivePopover,
  argTypes: {
    footer: { control: { disable: true } },
    children: { control: { disable: true } },
    header: { control: { disable: true } }
  },
  args: {
    children: (
      <Label>
        Press "Esc", click outside or in mobile-mode press the "x" in the corner to close the ResponsivePopover.
      </Label>
    ),
    headerText: 'ResponsivePopover Header',
    horizontalAlign: PopoverHorizontalAlign.Center,
    placementType: PopoverPlacement.End,
    verticalAlign: PopoverVerticalAlign.Center,
    opener: 'openPopoverBtn',
    className: 'footerPartNoPadding'
  },
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof ResponsivePopover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render(args) {
    const [responsivePopoverIsOpen, setResponsivePopoverIsOpen] = useState(isChromatic || args.open);
    return (
      <>
        <Button
          id={'openResponsivePopoverBtn'}
          onClick={() => {
            setResponsivePopoverIsOpen(true);
          }}
        >
          Open Popover
        </Button>
        <ResponsivePopover
          {...args}
          onClose={() => {
            setResponsivePopoverIsOpen(false);
          }}
          opener="openResponsivePopoverBtn"
          open={responsivePopoverIsOpen}
        />
      </>
    );
  }
};

export const WithContent: Story = {
  render(args) {
    const [responsivePopoverIsOpen, setResponsivePopoverIsOpen] = useState(false);
    const onButtonClick = () => {
      setResponsivePopoverIsOpen(true);
    };
    const handleClose = () => {
      setResponsivePopoverIsOpen(false);
    };
    return (
      <>
        <Button id="respPopoverBtn2" onClick={onButtonClick}>
          Open Responsive Popover
        </Button>
        <ResponsivePopover
          {...args}
          className={clsx('headerPartNoPadding', args.className)}
          opener="respPopoverBtn2"
          open={responsivePopoverIsOpen}
          onClose={handleClose}
          header={
            <Bar endContent={<Icon name="settings" />}>
              <Title>Popover</Title>
            </Bar>
          }
          footer={<Bar endContent={<Button onClick={handleClose}>Close</Button>} />}
        >
          <List style={{ width: '200px' }}>
            <ListItemStandard additionalText="3">List Item 1</ListItemStandard>
            <ListItemStandard additionalText="2">List Item 2</ListItemStandard>
            <ListItemStandard additionalText="1">List Item 3</ListItemStandard>
          </List>
        </ResponsivePopover>
      </>
    );
  }
};
