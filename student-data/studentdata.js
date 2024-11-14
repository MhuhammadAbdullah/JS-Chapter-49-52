document.addEventListener('DOMContentLoaded', () => {
    const studentForm = document.getElementById('studentForm');
    const studentTableBody = document.getElementById('studentTableBody');
    const editModal = document.getElementById('editModal');
    const editForm = document.getElementById('editForm');
    const closeModal = document.querySelector('.close');
    let editIndex = null;

    studentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const fatherName = document.getElementById('fatherName').value;
        const age = document.getElementById('age').value;
        const grade = document.getElementById('grade').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const cnic = document.getElementById('cnic').value;
        const address = document.getElementById('address').value;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="py-3 px-4">${name}</td>
            <td class="py-3 px-4">${fatherName}</td>
            <td class="py-3 px-4">${age}</td>
            <td class="py-3 px-4">${grade}</td>
            <td class="py-3 px-4">${email}</td>
            <td class="py-3 px-4">${phone}</td>
            <td class="py-3 px-4">${cnic}</td>
            <td class="py-3 px-4">${address}</td>
            <td class="py-3 px-4">
                <button class="editBtn text-blue-500 mr-2"><i class="fas fa-edit"></i></button>
                <button class="deleteBtn text-red-500"><i class="fas fa-trash"></i></button>
            </td>
        `;
        studentTableBody.appendChild(row);

        studentForm.reset();
    });

    studentTableBody.addEventListener('click', (e) => {
        if (e.target.closest('.deleteBtn')) {
            e.target.closest('tr').remove();
        }

        if (e.target.closest('.editBtn')) {
            const row = e.target.closest('tr');
            editIndex = Array.from(studentTableBody.children).indexOf(row);
            document.getElementById('editName').value = row.children[0].textContent;
            document.getElementById('editFatherName').value = row.children[1].textContent;
            document.getElementById('editAge').value = row.children[2].textContent;
            document.getElementById('editGrade').value = row.children[3].textContent;
            document.getElementById('editEmail').value = row.children[4].textContent;
            document.getElementById('editPhone').value = row.children[5].textContent;
            document.getElementById('editCnic').value = row.children[6].textContent;
            document.getElementById('editAddress').value = row.children[7].textContent;
            editModal.style.display = 'flex';
            editModal.style.justifyContent = 'center';
            editModal.style.alignItems = 'start';
        }
    });

    editForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('editName').value;
        const fatherName = document.getElementById('editFatherName').value;
        const age = document.getElementById('editAge').value;
        const grade = document.getElementById('editGrade').value;
        const email = document.getElementById('editEmail').value;
        const phone = document.getElementById('editPhone').value;
        const cnic = document.getElementById('editCnic').value;
        const address = document.getElementById('editAddress').value;

        const row = studentTableBody.children[editIndex];
        row.children[0].textContent = name;
        row.children[1].textContent = fatherName;
        row.children[2].textContent = age;
        row.children[3].textContent = grade;
        row.children[4].textContent = email;
        row.children[5].textContent = phone;
        row.children[6].textContent = cnic;
        row.children[7].textContent = address;

        editModal.style.display = 'none';
        editForm.reset();
    });

    closeModal.addEventListener('click', () => {
        editModal.style.display = 'none';
        editForm.reset();
    });

    window.addEventListener('click', (e) => {
        if (e.target == editModal) {
            editModal.style.display = 'none';
            editForm.reset();
        }
    });
});