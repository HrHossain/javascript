export class LibrarySection{
    constructor (){
        this._books = [];
    }
     get availableBooks(){
        return this._books.filter(book=>{
            return book.inStock && book.inStock >= book.reading && book.inStock >= book.borrowed
        })
    }
    get allBookedBooks(){
        return this._books.filter(book => {
            // true or false
            return book.reading 
        })
    }
    get allBorrowedBooks(){
        return this._books.filter(book=>{
            return book.borrowed && book.borrowed >= book.returned
        })
    }
    get allReturnedBooks(){
        return this._books.filter(book=>{
            return book.returned;
        })
    }
    collectBook(bookTitle, author, borrow, quantity){
        const titleInRegex = new RegExp(bookTitle, 'gi');
        const authorInRegex = new RegExp(author, 'gi')
        const bookToUse = this.availableBooks.filter(book=>{
            return titleInRegex.test(book.title) && authorInRegex.test(book.author)
        })[0];
         console.log({bookToUse})
        if(bookToUse &&  quantity <= bookToUse.inStock ){
            bookToUse.inStock -= quantity
            borrow ? bookToUse.borrowed += quantity : bookToUse.reading += quantity ;
            return bookToUse.bookPlacement
        }else{
            return 'Out of stock'
        }
    }
    returnBooks(ISBN,quantity){
        const bookToReturn = this.allBookedBooks.filter(bookedBook=>{
            return bookedBook.ISBN === ISBN;
        })[0];
        if(bookToReturn && quantity <= bookToReturn.reading) {
            bookToReturn.inStock += quantity;
            bookToReturn.reading -= quantity;
            return bookToReturn.bookPlacement
        }else{
            return 'Not collected in the quantity provided'
        }
    }
    borrowedBook(bookTitle,author){
        return this.collectBook(bookTitle, author, true, 1)
    }
    returnBorrowedBooks(ISBN, quantity){
        const bookToReturn = this.allBookedBooks.filter(borrowedBook=>{
            return borrowedBook.ISBN === ISBN;
        })[0];

        if(bookToReturn && quantity <= bookToReturn.borrowed){
            bookToReturn.inStock += quantity;
            bookToReturn.returned += quantity;
            bookToReturn.borrowed -= quantity;
            return bookToReturn.bookPlacement;
        }else{
             return 'Not borrowed in the quantity provided'
        }
    }
    totalBookStore(){
        return this._books.length
    }
    addBook(book) {
    // same ISBN থাকলে আবার add হবে না
    const alreadyExists = this._books.find(
        b => b.ISBN === book.ISBN
    );

    if (alreadyExists) {
        return 'Book already exists with this ISBN';
    }

    // default values ensure করা
    const newBook = {
        title: book.title,
        author: book.author,
        ISBN: book.ISBN,
        inStock: book.inStock || 1,
        bookPlacement: book.bookPlacement,
        reading: 0,
        borrowed: 0,
        returned: 0,
    };

    this._books.push(newBook);
    return 'Book added successfully';
}

}
