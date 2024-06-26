import { isChromatic } from '@sb/utils';
import type { Meta, StoryObj } from '@storybook/react';
import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '../Button';
import { ColorPaletteItem } from '../ColorPaletteItem';
import type { ColorPalettePopoverDomRef, ColorPalettePopoverPropTypes } from './index';
import { ColorPalettePopover as OriginalColorPalettePopover } from './index';

const meta = {
  title: 'Modals & Popovers / ColorPalettePopover',
  component: OriginalColorPalettePopover,
  argTypes: {
    children: { control: { disable: true } },
    defaultColor: { control: { type: 'color' } }
  },
  parameters: {
    chromatic: { delay: 1000 }
  },
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof OriginalColorPalettePopover>;

// todo remove once portals are supported inline, or general popovers are supported w/o having to mount them to the body
const ColorPalettePopover = forwardRef<ColorPalettePopoverDomRef, ColorPalettePopoverPropTypes>((args, ref) =>
  createPortal(<OriginalColorPalettePopover {...args} ref={ref} />, document.body)
);

ColorPalettePopover.displayName = 'ColorPalettePopover';

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render(args) {
    const popoverRef = useRef(null);
    const btnRef = useRef(null);
    const [open, setOpen] = useState(args.open);
    useEffect(() => {
      if (isChromatic) {
        popoverRef.current.showAt(btnRef.current);
      }
    }, []);
    const onButtonClick = (e) => {
      popoverRef.current.opener = e.currentTarget;
      setOpen((prev) => !prev);
    };
    return (
      <>
        <Button onClick={onButtonClick} ref={btnRef}>
          Open ColorPalettePopover
        </Button>
        <ColorPalettePopover
          {...args}
          ref={popoverRef}
          open={open}
          onClose={(e) => {
            args.onClose(e);
            setOpen(false);
          }}
        >
          <ColorPaletteItem value="black" />
          <ColorPaletteItem value="darkblue" />
          <ColorPaletteItem value="#444444" />
          <ColorPaletteItem value="rgb(0,200,0)" />
          <ColorPaletteItem value="green" />
          <ColorPaletteItem value="darkred" />
          <ColorPaletteItem value="yellow" />
          <ColorPaletteItem value="blue" />
          <ColorPaletteItem value="cyan" />
          <ColorPaletteItem value="orange" />
          <ColorPaletteItem value="#5480e7" />
          <ColorPaletteItem value="#ff6699" />
        </ColorPalettePopover>
      </>
    );
  }
};
