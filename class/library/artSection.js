import { LibrarySection } from "./librarySection.js";

LibrarySection
class ArtSection extends LibrarySection{
    constructor (){
        super();
        this._books = [
      {
        title: 'Love is bitter',
        author: 'Ariana Grande',
        ISBN: 4029,
        inStock: 10,
        bookPlacement: 'Art|200|1', // BookDetails (bookPlacement): 'Art|200|90'  // format: Section-Name|Shelf-Number|Book-Id
        reading: 0,
        borrowed: 0,
        returned: 0,
      },
      {
        title: 'Romeo and Juliet',
        author: 'William Shakespeare',
        ISBN: 4129,
        inStock: 1,
        bookPlacement: 'Art|200|2',
        reading: 0,
        borrowed: 0,
        returned: 0,
      },
      {
        title: 'The beauty of Art',
        author: 'John Doe',
        ISBN: 4429,
        inStock: 30,
        bookPlacement: 'Art|200|3',
        reading: 0,
        borrowed: 0,
        returned: 0,
      },
    ];
    }
   
}


const art = new ArtSection();
const tt = new LibrarySection()
const xx = art.collectBook('Love is Bitter', 'Ariana', false, 5);
art.returnBooks(4029, 1);
// borrowing a book
console.log(xx)
art.borrowedBook('Love is Bitter', 'Ariana Grande');
art.borrowedBook('Love is Bitter', 'Ariana Grande');
art.borrowedBook('Love is Bitter', 'Ariana Grande');
art.borrowedBook('Love is Bitter', 'Ariana Grande');
art.returnBorrowedBooks(4029, 1);
console.log(art.allBookedBooks);

console.log(art.totalBookStore())
const ttx = art.addBook({
    title: 'Modern Painting',
    author: 'Leonardo Da Vinci',
    ISBN: 5001,
    inStock: 5,
    bookPlacement: 'Art|201|10'
});
console.log(art)
console.log(tt,ttx)