// Sample CSV data
const csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";

// Part 2: Expanding Functionality
function parseCSV(csv) {
  const rows = csv.split('\n');
  const headers = rows[0].split(',');
  const numColumns = headers.length;
  
  const result = rows.map(row => row.split(','));
  
  return result;
}

// Part 3: Transforming Data
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
  data.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });
  
  // Add new object to the end
  data.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
  
  // Calculate average age
  const totalAge = data.reduce((sum, person) => sum + parseInt(person.age), 0);
  const averageAge = totalAge / data.length;
  
  return { manipulatedData: data, averageAge };
}

// Part 5: Full Circle - Back to CSV
function convertToCSV(data) {
  const headers = Object.keys(data[0]);
  const csvRows = [headers.join(',')];
  
  for (const row of data) {
    const values = headers.map(header => row[header]);
    csvRows.push(values.join(','));
  }
  
  return csvRows.join('\n');
}

// Main execution
const parsedData = parseCSV(csvData);
console.log("Parsed CSV:", parsedData);

const transformedData = transformToObjects(parsedData);
console.log("Transformed to objects:", transformedData);

const { manipulatedData, averageAge } = manipulateData(transformedData);
console.log("Manipulated data:", manipulatedData);
console.log("Average age:", averageAge);

const finalCSV = convertToCSV(manipulatedData);
console.log("Final CSV:", finalCSV);