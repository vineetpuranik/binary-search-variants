/*
function inputs
inputArr : sorted input array
target : target element to find in the input array.

function output
boolean : returns true if the element exists in the input array else returns false.
*/

function search(inputArray, target) {
    //Assumptions
    //InputArray has more than 1 element and all the elements in the array are sorted in ascending order
    //target is a valid integer and will always be supplied

    //Implement binary search
    function binarySearch(start, end, input) {

        // start and end pointers have crossed each other indicating that we have reached the end of our search 
        // in this case the target is not found
        if (start > end) {
            return false;
        }

        //calculate mid
        let mid = Math.floor((start + end) / 2);


        //target is the middle element
        //if both elements match we end our search and return
        if (target === input[mid]) {
            return true;
        }
        //target is greater than the middle element    
        //call binary search again on the right half of the input starting from mid +1 to end    
        else if (target > input[mid]) {
            return binarySearch(mid + 1, end, input);
        }
        //target is less than the middle element
        //call binary search again on the left half of the input starting from start to mid - 1    
        else if (target < input[mid]) {
            return binarySearch(start, mid -1 , input);
        }
    }
    //call binarySearch with start -  0, end - length -1 and the inputArray  
    return binarySearch(0, inputArray.length - 1 , inputArray);
    
}

