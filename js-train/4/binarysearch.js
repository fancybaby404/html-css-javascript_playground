var search = function(nums, target) {
    let targetIndex = null
    nums.forEach(function searchTarget(item, index){
                 if (item === target) {
                     targetIndex = index;
                 }
                 })
   if (targetIndex !== null) {
       return targetIndex;
   } else {
       return -1;
   }
};

console.log(search([1,2,3,4,5,6,7,8,9], 5));