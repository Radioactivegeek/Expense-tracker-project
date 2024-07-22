const balanceEl = document.getElementById('balance');
const incomeEl = document.getElementById('income');
const expensesEl = document.getElementById('expenses');
const listEl = document.getElementById('list');
const form = document.getElementById('transaction-form');
const textEl = document.getElementById('text');
const amountEl = document.getElementById('amount');

let transactions = [];

// Fetch transactions from the backend
async function fetchTransactions() {
    try {
        const res = await axios.get('http://localhost:5000/api/v1/get-income');
        transactions = res.data.data;
        init();
    } catch (err) {
        console.error(err);
    }
}

// Add transaction
async function addTransaction(e) {
    e.preventDefault();

    if (textEl.value.trim() === '' || amountEl.value.trim() === '') {
        alert('Please enter a text and amount');
    } else {
        const newTransaction = {
            text: textEl.value,
            amount: +amountEl.value
        };

        try {
            const res = await axios.post('http://localhost:5000/api/v1/add-income', newTransaction);
            transactions.push(res.data.data);
            addTransactionDOM(res.data.data);
            updateValues();
            textEl.value = '';
            amountEl.value = '';
        } catch (err) {
            console.error(err);
        }
    }
}

// Generate random ID
function generateID() {
    return Math.floor(Math.random() * 100000000);
}

// Add transactions to DOM list
function addTransactionDOM(transaction) {
    const sign = transaction.amount < 0 ? '-' : '+';
    const item = document.createElement('li');

    item.classList.add(transaction.amount < 0 ? 'bg-red-100' : 'bg-green-100');
    item.classList.add('p-2', 'rounded-lg', 'shadow-md', 'mb-2', 'flex', 'justify-between', 'items-center');
    item.innerHTML = `
        ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span>
        <button class="bg-danger-color text-white px-2 py-1 rounded" onclick="removeTransaction(${transaction._id})">x</button>
    `;

    listEl.appendChild(item);
}

// Update the balance, income and expense
function updateValues() {
    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

    balanceEl.innerText = `$${total}`;
    incomeEl.innerText = `$${income}`;
    expensesEl.innerText = `$${expense}`;
}

// Remove transaction by ID
async function removeTransaction(id) {
    try {
        await axios.delete(`http://localhost:5000/api/v1/delete-income/${id}`);
        transactions = transactions.filter(transaction => transaction._id !== id);
        init();
    } catch (err) {
        console.error(err);
    }
}

// Initialize app
function init() {
    listEl.innerHTML = '';
    transactions.forEach(addTransactionDOM);
    updateValues();
}

init();
fetchTransactions();

form.addEventListener('submit', addTransaction);

async function addTransaction(e) {
    e.preventDefault();

    if (textEl.value.trim() === '' || amountEl.value.trim() === '') {
        alert('Please enter a text and amount');
    } else {
        const newTransaction = {
            text: textEl.value,
            amount: +amountEl.value
        };

        console.log('New Transaction:', newTransaction);  // Log new transaction data

        try {
            const res = await axios.post('http://localhost:5000/api/v1/add-income', newTransaction);
            console.log('Response from server:', res.data);  // Log response from server
            transactions.push(res.data.data);
            addTransactionDOM(res.data.data);
            updateValues();
            textEl.value = '';
            amountEl.value = '';
        } catch (err) {
            console.error('Error adding transaction:', err);  // Log any errors
        }
    }
}
