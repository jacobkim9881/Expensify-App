import {useCallback, useContext} from 'react';
import {ActionListContext} from '@pages/home/ReportScreenContext';
import type ReportScrollManagerData from './types';

function useReportScrollManager(): ReportScrollManagerData {
    const {flatListRef} = useContext(ActionListContext);

    const scrollByArrowKey = useCallback(
        (direction: number, isEditing?: boolean) => {
            if (!flatListRef?.current || isEditing) {
                return;
            }
		const scrollLength = flatListRef.current._listRef._scrollMetrics.visibleLength;
		const currentOffset = flatListRef.current._listRef._scrollMetrics.offset;
		const nextOffset = currentOffset + (40 * direction) 
		let movedLength = nextOffset > scrollLength ? 1 : nextOffset < 0 ? 0 : ((nextOffset) / scrollLength).toFixed(3);

		console.log('scrollLength: ', scrollLength)
		console.log('currentOffset: ', currentOffset)
		console.log('nextOffset: ', nextOffset)
		console.log('movedLength: ', movedLength)
		console.log('flatListRef.current.: ', flatListRef.current)
		console.log('flatListRef.current._listRef._scrollMetrics: ', flatListRef.current._listRef._scrollMetrics)
		console.log('flatListRef.current._listRef._scrollMetrics.contentLength: ', flatListRef.current._listRef._scrollMetrics.contentLength)
		console.log('flatListRef.current._listRef._scrollMetrics.offset: ', flatListRef.current._listRef._scrollMetrics.offset)
            flatListRef.current.scrollToIndex({index: 10, viewPosition: movedLength, animated: true});
            //flatListRef.current.scrollToIndex({index: movedLength, animated: true});
        },
        [flatListRef],
    );


    /**
     * Scroll to the provided index. On non-native implementations we do not want to scroll when we are scrolling because
     */
    const scrollToIndex = useCallback(
        (index: number, isEditing?: boolean) => {
            if (!flatListRef?.current || isEditing) {
                return;
            }
		console.log('flatListRef.current.: ', flatListRef.current)
		console.log('flatListRef.current._listRef._scrollMetrics: ', flatListRef.current._listRef._scrollMetrics)
		console.log('flatListRef.current._listRef._scrollMetrics.contentLength: ', flatListRef.current._listRef._scrollMetrics.contentLength)
		console.log('flatListRef.current._listRef._scrollMetrics.offset: ', flatListRef.current._listRef._scrollMetrics.offset)

            flatListRef.current.scrollToIndex({index, animated: true});
        },
        [flatListRef],
    );

    /**
     * Scroll to the bottom of the flatlist.
     */
    const scrollToBottom = useCallback(() => {
        if (!flatListRef?.current) {
            return;
        }

        flatListRef.current.scrollToOffset({animated: false, offset: 0});
    }, [flatListRef]);

    return {ref: flatListRef, scrollByArrowKey, scrollToIndex, scrollToBottom};
}

export default useReportScrollManager;
