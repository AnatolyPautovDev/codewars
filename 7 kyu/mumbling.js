// ❓ DESCRIPTION:

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// ✅ SOLUTION:

function accum(s) {
	let result = ''
    for (let i = 0; i < s.length; i++) {
        const el = s[i];
        result += el.toUpperCase() + el.toLowerCase().repeat(i);
        if (s.length - i !== 1){
            result += '-'
        }
    }
    return result;
}

console.log(accum("abcd"));
