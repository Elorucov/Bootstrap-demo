function bubbleSort(nums) {
	for (let i = nums.length - 1; i >= 0; i--) {
        for (let pos = 0; pos < i; pos++) {
            if (nums[pos] > nums[pos + 1]) {
                var temp = nums[pos];
                nums[pos] = nums[pos + 1];
                nums[pos + 1] = temp;
            }
        }
    }
}

function insertionSort(nums) {
	for (let pos = 1; pos < nums.length; pos++) {
        let number = nums[pos];
        let prevPos = pos - 1;
        while (pos >= 0 && nums[prevPos] > number) {
            nums[prevPos + 1] = nums[prevPos];
            prevPos--;
        }
        nums[prevPos + 1] = number;
    }
}

function selectionSort(nums) {
	let n = nums.length;
    for (let i = 0; i < n - 1; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (nums[j] < nums[min]) {
                min = j;
            }
        }

        let temp = nums[i];
        nums[i] = nums[min];
        nums[min] = temp;
    }
}

function sort() {
	const output = document.getElementById('output');
	const radios = document.getElementsByName('sort');
	let type = 0;

	const nums = [72, 14, 63, 99, 7, 44, 38, 75, 21, 57];
	output.innerHTML = `Original: ${nums.join(', ')}<br>`;

	for (i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
        	console.log(`Checked ${i} — ${radios[i].value}`);
        	type = i;
        	output.innerHTML += `${radios[i].value}: `;
        }
    }

    switch (type) {
    	case 0:
    		bubbleSort(nums);
    		break;
    	case 1:
    		insertionSort(nums);
    		break;
    	case 2:
    		selectionSort(nums);
    		break;
    }

	output.innerHTML += nums.join(', ');
}