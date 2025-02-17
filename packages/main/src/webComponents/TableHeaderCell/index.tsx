'use client';

import '@ui5/webcomponents/dist/TableHeaderCell.js';
import type TableCellHorizontalAlign from '@ui5/webcomponents/dist/types/TableCellHorizontalAlign.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

interface TableHeaderCellAttributes {
  /**
   * Determines the horizontal alignment of table cells.
   * **Note:** All values valid for justify-content can be used, not just the ones inside the enumeration.
   * @default undefined
   */
  horizontalAlign?: TableCellHorizontalAlign | undefined | keyof typeof TableCellHorizontalAlign;

  /**
   * Defines the importance of the column.
   *
   * This property affects the popin behaviour.
   * Columns with higher importance will move into the popin area later then less important
   * columns.
   * @default 0
   */
  importance?: number;

  /**
   * Defines the maximum width of the column.
   * @default "auto"
   */
  maxWidth?: string;

  /**
   * Defines the minimum width of the column.
   *
   * If the table is in `Popin` mode and the minimum width does not fit anymore,
   * the column will move into the popin.
   *
   * **Note:** If `minWidth` has the `auto` value, the table ensures that the column is wider than at least `3rem`.
   * @default "auto"
   */
  minWidth?: string;

  /**
   * Defines the width of column.
   * @default "auto"
   */
  width?: string;
}

interface TableHeaderCellDomRef extends Required<TableHeaderCellAttributes>, Ui5DomRef {}

interface TableHeaderCellPropTypes
  extends TableHeaderCellAttributes,
    Omit<CommonProps, keyof TableHeaderCellAttributes | 'children'> {
  /**
   * Defines the content of the component.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `TableHeaderCell` component represents a column in the `Table`.
 *
 * As it is tightly coupled to the `Table`, it should only be used in the `TableHeaderRow`
 * to ensure correct layout and design.
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of __@ui5/webcomponents__.
 * @experimental This web component is available since 2.0 with an experimental flag and its API and behavior are subject to change.
 */
const TableHeaderCell = withWebComponent<TableHeaderCellPropTypes, TableHeaderCellDomRef>(
  'ui5-table-header-cell',
  ['horizontalAlign', 'importance', 'maxWidth', 'minWidth', 'width'],
  [],
  [],
  []
);

TableHeaderCell.displayName = 'TableHeaderCell';

export { TableHeaderCell };
export type { TableHeaderCellDomRef, TableHeaderCellPropTypes };
