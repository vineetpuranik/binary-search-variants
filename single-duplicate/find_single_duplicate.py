def findSingleDuplicate(start, end, A):
    if start < end:
        mid = (start + end) // 2

        if A[mid] == mid:
            return findSingleDuplicate(mid + 1, end, A)
        else:
            return findSingleDuplicate(start, mid, A)
    else:
        return A[start]

for dup_val in range(1, 101):  # For each number from 1 to 100
    A = list(range(1, 101))  # Elements from 1 to 100
    A.append(dup_val)  # Add the duplicated value to the array
    A.sort()  # Sort the array
    A.insert(0, -1)  # Inserting -1 for 1-based indexing
    print(f"Input array {A}")
    found_duplicate = findSingleDuplicate(1, len(A) - 1, A)
    print(f"Expected dup {dup_val}")
    print(f"Calculated dup {found_duplicate}")
    print(f"------------------------------------------------------------------------------------")
    assert found_duplicate == dup_val, f"Failed for duplicate {dup_val}, found {found_duplicate}"

print("All tests passed!")
