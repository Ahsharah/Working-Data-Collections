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