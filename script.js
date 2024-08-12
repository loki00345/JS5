// 1
let year = prompt("Введіть рік:");
let month = prompt("Введіть місяць:");
let day = prompt("Введіть день:");

console.log(`Введена дата: ${year}-${month}-${day}`);

// 2
let flashDriveSizeGB = prompt("Введіть обсяг флешки в ГБ:");

let fileSizeMB = 820;
let fileSizeGB = fileSizeMB / 1024; 
let filesCount = Math.floor(flashDriveSizeGB / fileSizeGB);

console.log(`Флешка ${flashDriveSizeGB} ГБ вміщує ${filesCount} файлів розміром ${fileSizeMB} МБ.`);

// 3
let r = prompt("Введіть значення для червоного кольору (0-255):");
let g = prompt("Введіть значення для зеленого кольору (0-255):");
let b = prompt("Введіть значення для синього кольору (0-255):");

console.log(`rgb(${r},${g},${b});`);
// 4
let array = [1, -9, 13, -3, 6, -2, 0, -4, 1, -6];

let modifiedArray = [];

for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
        modifiedArray.push(-array[i]);
    } else {
        modifiedArray.push(Math.abs(array[i]));
    }
}

modifiedArray.sort((a, b) => a - b);

console.log("Початковий масив:", array);
console.log("Модифікований та відсортований масив:", modifiedArray);
