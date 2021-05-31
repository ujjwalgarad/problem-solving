// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// The number of elements initialized in nums1 and nums2 are m and n respectively. 
// You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2.
// Do not return anything, modify nums1 in-place instead.
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]

const myFunction = (nums1, m, nums2, n) =>{
    let big = m-1, small = n-1, result = nums1.length -1;

    while(big >= 0 && small >= 0){
        if(nums1[big] > nums2[small]){
            nums1[result] = nums1[big];
            big--;
        }else{
            nums1[result] = nums2[small];
            small--;
        }
        result--;
    }

    while(big >= 0){
        nums1[result] = nums1[big];
        big--;
        result--;
    }

    while(small >= 0){
        nums1[result] = nums2[small];
        small--;
        result--;
    }

    return nums1;
}

module.exports = myFunction;