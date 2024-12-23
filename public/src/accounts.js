function findAccountById(accounts, id) {
let found = accounts.find((account) => account.id === id);
return found; 
}

function sortAccountsByLastName(accounts) {
 let sorted = accounts.sort((i1, i2) => 
i1.name.last.toLowerCase() > i2.name.last.toLowerCase() ? 1 : -1);
return sorted;
}

function getAccountFullNames(accounts) {
 let fullNames = accounts.map((index) => index.name.first + " " + index.name.last);
 return fullNames;
}

// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    const count = book.borrows.reduce((borrowAcc, borrow) => {
      return borrow.id === account.id ? borrowAcc + 1 : borrowAcc;
    }, 0);

    return acc + count;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter((book) => {
      const recent = book.borrows[0];
      return !recent.returned && recent.id === account.id;
    })
    .map((book) => {
      const author = authors.find((author) => author.id === book.authorId);
      return { ...book, author };
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getAccountFullNames,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
