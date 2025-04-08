function saveTask() {
    const taskContent = document.querySelector('.task-section textarea').value;
    alert(`Công việc đã lưu: ${taskContent}`);
}

function saveExpense() {
    const expenseContent = document.querySelector('.expense-section textarea').value;
    alert(`Chi tiêu đã lưu: ${expenseContent}`);
}

function saveNote() {
    const noteContent = document.querySelector('.note-section textarea').value;
    alert(`Ghi chú đã lưu: ${noteContent}`);
}
