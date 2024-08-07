import '@ui5/webcomponents-icons/dist/settings.js';
import { isChromatic } from '@sb/utils';
import type { Meta, StoryObj } from '@storybook/react';
import BarDesign from '@ui5/webcomponents/dist/types/BarDesign.js';
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
import { Popover } from './index';

const meta = {
  title: 'Modals & Popovers / Popover',
  component: Popover,
  argTypes: {
    footer: { control: { disable: true } },
    header: { control: { disable: true } }
  },
  args: {
    children: <Label>Press "Escape" or click outside to close the Popover</Label>,
    headerText: 'Popover Header',
    horizontalAlign: PopoverHorizontalAlign.Center,
    placement: PopoverPlacement.End,
    verticalAlign: PopoverVerticalAlign.Center,
    className: 'footerPartNoPadding'
  },
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render(args) {
    const [popoverIsOpen, setPopoverIsOpen] = useState(isChromatic || args.open);
    return (
      <>
        <Button
          id={'openPopoverBtn'}
          onClick={() => {
            setPopoverIsOpen(true);
          }}
        >
          Open Popover
        </Button>
        <Popover
          {...args}
          onClose={() => {
            setPopoverIsOpen(false);
          }}
          opener="openPopoverBtn"
          open={popoverIsOpen}
        />
      </>
    );
  }
};

export const PopoverWithContent: Story = {
  render(args) {
    const [popoverIsOpen, setPopoverIsOpen] = useState(false);
    const onButtonClick = () => {
      setPopoverIsOpen(true);
    };
    const handleClose = () => {
      setPopoverIsOpen(false);
    };
    return (
      <>
        <Button id="openPopoverBtn2" onClick={onButtonClick}>
          Open Popover
        </Button>
        <Popover
          {...args}
          opener="openPopoverBtn2"
          open={popoverIsOpen}
          onClose={handleClose}
          className={clsx('headerPartNoPadding', args.className)}
          header={
            <Bar endContent={<Icon name="settings" />} design={BarDesign.Header}>
              <Title>Popover</Title>
            </Bar>
          }
          footer={<Bar endContent={<Button onClick={handleClose}>Close</Button>} design={BarDesign.Footer} />}
        >
          <List style={{ width: '200px' }}>
            <ListItemStandard additionalText="3">List Item 1</ListItemStandard>
            <ListItemStandard additionalText="2">List Item 2</ListItemStandard>
            <ListItemStandard additionalText="1">List Item 3</ListItemStandard>
          </List>
        </Popover>
      </>
    );
  }
};
