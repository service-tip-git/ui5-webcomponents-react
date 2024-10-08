import type { ReactTableHooks, TableInstance } from '../types/index.js';

const getVisibleColumnsWidth = (instance: TableInstance) => {
  const visibleColumnsWidth = instance.visibleColumns.map((item) => item.totalWidth);
  Object.assign(instance, { visibleColumnsWidth });
};

export const useVisibleColumnsWidth = (hooks: ReactTableHooks) => {
  hooks.useInstance.push(getVisibleColumnsWidth);
};
useVisibleColumnsWidth.pluginName = 'useVisibleColumnsWidth';
