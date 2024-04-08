<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Interactive Data Table Form</title>
</head>
<body>

<h1>Data Table Form</h1>

<form id="dataForm">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name"><br><br>
    
    <label for="age">Age:</label>
    <input type="number" id="age" name="age"><br><br>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email"><br><br>
    
    <button type="button" onclick="addData()">Add Data</button>
    <button type="button" onclick="saveData()">Save Data</button>
</form>

<hr>

<h2>Data Table</h2>
<table id="dataTable">
    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        <!-- Data rows will be added dynamically here -->
    </tbody>
</table>

<br><br>
<button onclick="exportData()">Export as JSON</button>

<script>
    let data = [];

    window.onload = function() {
        if(localStorage.getItem('savedData')) {
            data = JSON.parse(localStorage.getItem('savedData'));
            renderData();
        }
    }

    function addData() {
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const email = document.getElementById('email').value;

        if (name.trim() === '' || age.trim() === '' || email.trim() === '') {
            alert('Please fill out all fields');
            return;
        }

        data.push({ name, age, email });

        renderData();
        clearForm();
    }

    function renderData() {
        const tableBody = document.querySelector('#dataTable tbody');
        tableBody.innerHTML = '';

        data.forEach((item, index) => {
            const row = `<tr>
                            <td>${item.name}</td>
                            <td>${item.age}</td>
                            <td>${item.email}</td>
                            <td><button onclick="deleteItem(${index})">Delete</button></td>
                        </tr>`;
            tableBody.innerHTML += row;
        });
    }

    function deleteItem(index) {
        data.splice(index, 1);
        renderData();
    }

    function clearForm() {
        document.getElementById('name').value = '';
        document.getElementById('age').value = '';
        document.getElementById('email').value = '';
    }

    function saveData() {
        localStorage.setItem('savedData', JSON.stringify(data));
    }

    function exportData() {
        const jsonData = JSON.stringify(data);
        const blob = new Blob([jsonData], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'data.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
</script>

</body>
</html>
