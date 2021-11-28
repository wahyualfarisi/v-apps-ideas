<template>
  <base-card>
    <ul>
        <pagination-item
            v-for="page in createPagination"
            :key="page"
            :page="page"
            :currentPage="currentPage"
            @onPageChange="onPageHandler"
        ></pagination-item>
    </ul>
  </base-card>
</template>

<script>
import PaginationItem from './../../molecules/PaginationItem';
import BaseCard from './../../atoms/BaseCard';

function range(start, end) {
    const length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
}

export const NAV_LEFT = 'left';
export const NAV_RIGHT = 'right';

export default {
    components: {
        PaginationItem,
        BaseCard
    },
    props: {
        totalCount: {
            type: Number,
            required: true
        },
        siblingCount: {
            type: Number,
            required: true
        },
        currentPage: {
            type: Number,
            required: true 
        },
        pageSize: {
            type: Number,
            required: true 
        },
        onPageHandler: {
            type: Function,
            required: true
        }
    },
    computed: {
        createPagination(){
            if(!this.totalCount && !this.siblingCount && !this.currentPage && !this.pageSize ) return null;

            const totalPageCount = Math.ceil(this.totalCount / this.pageSize);
            const totalPageNumbers = this.siblingCount + 5;
            if( totalPageNumbers >= totalPageCount ){
                return range(1, totalPageCount);
            }

            const leftSiblingIndex = Math.max( this.currentPage - this.siblingCount, 1 );
            const rightSiblingIndex = Math.min( this.currentPage + this.siblingCount, totalPageCount );

            const shouldShowNavLeft = leftSiblingIndex > 2;
            const shouldShowNavRight = rightSiblingIndex < ( totalPageCount - 1 );

            if(!shouldShowNavLeft && shouldShowNavRight){
                let leftItemCount = 5;
                let leftRange = range(1, leftItemCount);
                return [...leftRange, NAV_RIGHT];
            }

            if(shouldShowNavLeft && shouldShowNavRight){
                let start = leftSiblingIndex - 1;
                let middleRange = range(leftSiblingIndex, rightSiblingIndex);
                let end = rightSiblingIndex + 1;

                return  [NAV_LEFT, start,  ...middleRange, end, NAV_RIGHT];
            }

            if(shouldShowNavLeft && !shouldShowNavRight){
                let rightItemCount = 5;
                let rightRange = range( (totalPageCount - rightItemCount) + 1, totalPageCount );
                return [NAV_LEFT, ...rightRange];
            }

            return [];
        }
    }
   
}
</script>

<style scoped>
    ul {
        list-style-type: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>