import { LayoutType, isLayoutType } from './LayoutType';

describe.only('LayoutType', () => {
  it('is an enum', () => {
    expect(LayoutType.Component).toEqual('Component');
    expect(LayoutType.Stack).toEqual('Stack');

    const name = 'Stack';
    expect(LayoutType[name]).toEqual(LayoutType.Stack);
    expect(LayoutType['asdasd']).toEqual(undefined);
  });

  it('isLayoutType', () => {
    expect(isLayoutType(null)).toBe(false);
    expect(isLayoutType(undefined)).toBe(false);
    expect(isLayoutType('')).toBe(false);
    expect(isLayoutType('asdasd')).toBe(false);
    expect(isLayoutType('TopTabs')).toBe(true);
    expect(isLayoutType('isLayoutType')).toBe(false);
  });
});