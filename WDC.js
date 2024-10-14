//Sample CSV data
const csvData = "ID, Name, Occupation, Age\n42, Brice, Knoght, 41\n57,Bob,Fry Cook, 19\n63, Blane, Quiz Master, 58\n98,Bill,Doctor's Assistant, 26";

// Part 2: Expanding Functionality
function parseCSV(csv) {
    const rows = csv.split('\n');
    const headers = rows[0].split(',');
    const numColums = headers.length;

    const results = row.map(row => row.split(','));

    return results;
}

// Part 3: Trandforming Data
function transformToObjects(data) {
    const [headers, ...rows] = data;
    const lowercaseHeaders = headers.map(header => header.toLowerCase());
    
    return rows.map(row => {
      const obj = {};
      row.forEach((value, index) => {
        obj[lowercaseHeaders[index]] = value;
      });
      return obj;
    });
  }

  // Part 4: Sorting and Manipulating Data
  function manipulateData(data) {
    
    // Remove the last element
    data.pop();

    // Insert new object at index 1
    data.splice(1,0, {id: "48", name: "Barry", occupation: "Runner", age: "25"});

    // Add new object to the end
    data.push ({ id: "7", name: "Bilbo", occupation: "None", age: "111"});

    // Calculate average age
    const totalAge = data.reduce((sum, person) => sum + parseInt(person.age), 0);
    const averageAge = totalAge / data.length;

    return { manipulatedData: data,averageAge };
  }

// Part 5: Full Circle - Back to CSV
function convertToCSV(data) {
    const headers = Object.keys(data[0]);
    const csvRows = [headers.join(',')];
    
for (const row of data) {
    const values = header.map(header => row[header]);
    csvRows.push(values.join(','));
}

return csv.Rows.join('\n');
}

// Main Execution
const parsedData = parseCSV(csvData);
console.log("Parsed CSV:", parsedData);

const trandformedData = transformToObject(parsedData);
console.log("Transformed to objects:", transformedData);

const { manipulatedData, averageAge } = manipulatedData(transformedData);
console.log("Manipulated data:", manipulateData);
console.log("Average age:", averageAge);

constfinalCSV = convertToCSV(manipulatedData);
console.log("Final CSV", finalCSV);
