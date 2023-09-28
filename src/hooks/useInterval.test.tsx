import { renderHook } from '@testing-library/react';
import { useInterval } from './useInterval';

describe('useInterval Hook', () => {
    beforeAll(() => {
        jest.useFakeTimers();
    });

    afterAll(() => {
        jest.useRealTimers();
    });

    it('should call the callback with the specified delay', () => {
        const callback = jest.fn();
        const delay = 1000;

        renderHook(() => useInterval(callback, delay));

        jest.advanceTimersByTime(1000);

        expect(callback).toHaveBeenCalledTimes(1);

        jest.advanceTimersByTime(1000);

        expect(callback).toHaveBeenCalledTimes(2);
    });

    it('should stop calling the callback after unmounting', () => {
        const callback = jest.fn();
        const delay = 1000;

        const { unmount } = renderHook(() => useInterval(callback, delay));

        jest.advanceTimersByTime(1000);

        expect(callback).toHaveBeenCalledTimes(1);

        unmount();

        jest.advanceTimersByTime(1000);

        expect(callback).toHaveBeenCalledTimes(1);
    });
});
